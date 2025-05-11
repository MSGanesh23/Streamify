import React, { useState } from 'react';
import QRCode from 'qrcode';

const PaymentPage = () => {
  const [message, setMessage] = useState('');
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [qrCode, setQrCode] = useState(null);
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  // Simple regex for UPI ID validation: non-empty user@bank format
  const upiPattern = /^[\w.-]+@[\w.-]+$/;

  const validateInputs = () => {
    const upi = upiId.trim();
    const amt = parseFloat(amount);
    if (!upiPattern.test(upi)) {
      setMessage('Please enter a valid UPI ID (e.g. example@bank).');
      setQrCodeVisible(false);
      clearQRCode();
      return false;
    }
    if (isNaN(amt) || amt < 1) {
      setMessage('Please enter a valid amount of ₹1 or more.');
      setQrCodeVisible(false);
      clearQRCode();
      return false;
    }
    return true;
  };

  const clearQRCode = () => {
    if (qrCode) {
      qrCode.clear();
    }
  };

  const generateQRCode = (upiLink) => {
    setQrCodeVisible(true);
    if (qrCode) {
      qrCode.clear();
      qrCode.makeCode(upiLink);
    } else {
      const newQrCode = new QRCode(document.getElementById('qrcode'), {
        text: upiLink,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
      setQrCode(newQrCode);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Reset message
    if (!validateInputs()) {
      return;
    }
    const upi = encodeURIComponent(upiId.trim());
    const amt = parseFloat(amount).toFixed(2);

    const payeeName = encodeURIComponent('StreamFlix');
    const transactionNote = encodeURIComponent('Video Streaming Subscription');

    const upiLink = `upi://pay?pa=${upi}&pn=${payeeName}&am=${amt}&cu=INR&tn=${transactionNote}`;

    setMessage(
      'QR code generated below. You can pay using your UPI app or click the button below.'
    );

    generateQRCode(upiLink);
  };

  const handleInputChange = () => {
    if (validateInputs()) {
      const upi = encodeURIComponent(upiId.trim());
      const amt = parseFloat(amount).toFixed(2);
      const payeeName = encodeURIComponent('StreamFlix');
      const transactionNote = encodeURIComponent('Video Streaming Subscription');
      const upiLink = `upi://pay?pa=${upi}&pn=${payeeName}&am=${amt}&cu=INR&tn=${transactionNote}`;
      generateQRCode(upiLink);
      setMessage('');
    } else {
      setQrCodeVisible(false);
      clearQRCode();
      setMessage('');
    }
  };

  // Debounced input change for better UX
  let inputTimeout = null;
  const handleInputDebounced = (e, setter) => {
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => setter(e.target.value), 500);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
      }}
    >
      <div
        className="container"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '2rem',
          maxWidth: '350px',
          width: '100%',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            letterSpacing: '1px',
          }}
        >
          Streamify Payment
        </h1>
        <form id="paymentForm" noValidate onSubmit={handleFormSubmit}>
          <label htmlFor="upiId" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            Enter your UPI ID
          </label>
          <input
            type="text"
            id="upiId"
            name="upiId"
            value={upiId}
            onChange={(e) => handleInputDebounced(e, setUpiId)}
            placeholder="example@bank"
            required
            pattern="^[\w.-]+@[\w.-]+$"
            style={{
              width: '100%',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              outline: 'none',
              transition: 'background 0.3s ease',
            }}
          />
          <label htmlFor="amount" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            Enter amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => handleInputDebounced(e, setAmount)}
            placeholder="10"
            min="1"
            step="0.01"
            required
            style={{
              width: '100%',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              outline: 'none',
              transition: 'background 0.3s ease',
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: '1.5rem',
              width: '100%',
              background: '#6c63ff',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '12px',
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(108, 99, 255, 0.4)',
              transition: 'background 0.3s ease',
            }}
          >
            Pay Now
          </button>
        </form>
        {message && (
          <div
            className="message"
            style={{
              marginTop: '1rem',
              textAlign: 'center',
              fontWeight: '600',
              minHeight: '1.5em',
              color: '#ffecb3',
              width: '100%',
            }}
          >
            {message}
          </div>
        )}
        {qrCodeVisible && (
          <div
            id="qrcode"
            style={{
              marginTop: '1.5rem',
              background: '#fff',
              borderRadius: '12px',
              padding: '1rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
