package com.demo.video;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {

    // ✅ Search only by title (case-insensitive)
    List<Video> findByTitleIgnoreCaseContaining(String title);

}
