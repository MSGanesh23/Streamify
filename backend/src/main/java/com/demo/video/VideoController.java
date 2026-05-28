package com.demo.video;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}) // React frontend
public class VideoController {

    @Autowired
    private VideoRepository videoRepository;

    // --- Get all videos ---
    @GetMapping
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    // --- Get video by numeric ID ---
    @GetMapping("/{id:[0-9]+}")
    public ResponseEntity<Video> getVideoById(@PathVariable Long id) {
        return videoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // --- Get videos by genre ---
    @GetMapping("/genre/{genre}")
    public List<Video> getVideosByGenre(@PathVariable String genre) {
        return videoRepository.findAll().stream()
                .filter(v -> v.getGenres().contains(genre))
                .toList();
    }

    // --- Add video ---
    @PostMapping
    public ResponseEntity<Video> addVideo(@RequestBody Video video) {
        if (video.getTitle() == null || video.getVideoUrl() == null) {
            return ResponseEntity.badRequest().body(null);
        }
        Video savedVideo = videoRepository.save(video);
        return ResponseEntity.status(201).body(savedVideo);
    }

    // --- Update video ---
    @PutMapping("/id/{id}")
    public ResponseEntity<Video> updateVideo(@PathVariable Long id, @RequestBody Video updatedVideo) {
        return videoRepository.findById(id)
                .map(existingVideo -> {
                    existingVideo.setTitle(updatedVideo.getTitle());
                    existingVideo.setDescription(updatedVideo.getDescription());
                    existingVideo.setGenres(updatedVideo.getGenres());
                    existingVideo.setYear(updatedVideo.getYear());
                    existingVideo.setDuration(updatedVideo.getDuration());
                    existingVideo.setThumbnailUrl(updatedVideo.getThumbnailUrl());
                    existingVideo.setVideoUrl(updatedVideo.getVideoUrl());
                    return ResponseEntity.ok(videoRepository.save(existingVideo));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // --- Delete video ---
    @DeleteMapping("/id/{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable Long id) {
        return videoRepository.findById(id)
                .map(video -> {
                    videoRepository.delete(video);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // --- Search videos by title only ---
    @GetMapping("/search")
    public List<Video> search(@RequestParam(required = false) String query) {
        if (query == null || query.trim().isEmpty()) return List.of();

        return videoRepository.findByTitleIgnoreCaseContaining(query);
    }
}
