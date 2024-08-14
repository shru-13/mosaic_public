//package com.example.mosaicmgmt.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.example.mosaicmgmt.entity.Sports;
//import com.example.mosaicmgmt.services.SportsService;
//
//@RestController
//@RequestMapping("/sports")
//@CrossOrigin(origins = "http://localhost:3000")
//public class SportsController {
//
//    @Autowired
//    private SportsService sportsService;
//
//    @PostMapping("/join")
//    public ResponseEntity<Sports> joinClub(@RequestBody Sports sports) {
//        Sports savedSports = sportsService.joinClub(sports);
//        return ResponseEntity.ok(savedSports);
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

import com.example.mosaicmgmt.entity.Arts;
import com.example.mosaicmgmt.entity.Sports;
import com.example.mosaicmgmt.services.SportsService;

@RestController
@RequestMapping("/sports")
@CrossOrigin(origins = "http://localhost:3000")
public class SportsController {

    @Autowired
    private SportsService sportsService;
    
    @PostMapping("/join")
    public ResponseEntity<Sports> joinClub(@RequestBody Sports sports) {
        Sports savedSports = sportsService.joinClub(sports);
        return ResponseEntity.ok(savedSports);
    }

    @DeleteMapping("/leave")
    public ResponseEntity<String> leaveClub(@RequestBody UserLeaveRequest userLeaveRequest) {
        try {
            sportsService.removeMember(userLeaveRequest.getUserId());
            return ResponseEntity.ok("User successfully removed from the club.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error removing user from the club.");
        }
    }

    public static class UserLeaveRequest {
        private Long userId;

        // Getter and Setter
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }
    }
    
    @GetMapping("/count")
    public long getMemberCount() {
        return sportsService.getMemberCount();
    }
    
    @GetMapping("/members")
    public List<Sports> getAllMembers() {
        return sportsService.getAllMembers();
    }
    
    
}
