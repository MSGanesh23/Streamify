import React from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="overlay"></div>
            
            <h1 className="title">Streamify</h1>

            <div className="content-container">
                
                <div className="left-content">
                    <p>Starts at only <br/>₹149/month</p>
                </div>

                <div className="right-content">
                    <p>Endless entertainment,<br /> anytime, anywhere.<br />Your stories, your way</p>
                    <div className="buttons">
                        <button className="signin">Sign In</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Homepage;