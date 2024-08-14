//package com.example.mosaicmgmt.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.mosaicmgmt.entity.Music;
//import com.example.mosaicmgmt.services.MusicService;
//
//@RestController
//@RequestMapping("/music")
//@CrossOrigin(origins = "http://localhost:3000")
//public class MusicController {
//
//    @Autowired
//    private MusicService musicService;
//
//    @PostMapping("/join")
//    public ResponseEntity<Music> joinMusicClub(@RequestBody Music music) {
//        Music savedMusic = musicService.joinMusicClub(music);
//        return ResponseEntity.ok(savedMusic);
//    }
//}


package com.example.mosaicmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaicmgmt.entity.Music;
import com.example.mosaicmgmt.entity.Sports;
import com.example.mosaicmgmt.services.MusicService;

@RestController
@RequestMapping("/music")
@CrossOrigin(origins = "http://localhost:3000")
public class MusicController {

    @Autowired
    private MusicService musicService;

    @PostMapping("/join")
    public ResponseEntity<Music> joinMusicClub(@RequestBody Music music) {
        Music savedMusic = musicService.joinMusicClub(music);
        return ResponseEntity.ok(savedMusic);
    }

    @DeleteMapping("/leave")
    public ResponseEntity<Void> leaveClub(@RequestBody LeaveRequest request) {
        musicService.leaveClub(request.getUserId());
        return ResponseEntity.ok().build();
    }

    public static class LeaveRequest {
        private Long userId;

        // Getters and setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }
    }
    
    @GetMapping("/count")
    public long getMemberCount() {
        return musicService.getMemberCount();
    }
    
    @GetMapping("/members")
    public List<Music> getAllMembers() {
        return musicService.getAllMembers();
    }
}
