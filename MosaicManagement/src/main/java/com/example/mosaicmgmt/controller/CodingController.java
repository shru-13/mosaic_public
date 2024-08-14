//package com.example.mosaicmgmt.controller;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.example.mosaicmgmt.entity.Coding;
//import com.example.mosaicmgmt.services.CodingService;
//
//@RestController
//@RequestMapping("/coding-club")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CodingController {
//
//    @Autowired
//    private CodingService codingClubService;
//
//    @PostMapping("/join")
//    public ResponseEntity<Coding> joinClub(@RequestBody Coding member) {
//        Coding savedMember = codingClubService.joinClub(member);
//        return ResponseEntity.ok(savedMember);
//    }
//}
package com.example.mosaicmgmt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mosaicmgmt.entity.Coding;
import com.example.mosaicmgmt.entity.Music;
import com.example.mosaicmgmt.services.CodingService;

@RestController
@RequestMapping("/coding-club")
@CrossOrigin(origins = "http://localhost:3000")
public class CodingController {

    @Autowired
    private CodingService codingClubService;

    @PostMapping("/join")
    public ResponseEntity<Coding> joinClub(@RequestBody Coding member) {
        Coding savedMember = codingClubService.joinClub(member);
        return ResponseEntity.ok(savedMember);
    }

    @DeleteMapping("/leave")
    public ResponseEntity<Void> leaveClub(@RequestBody LeaveRequest request) {
        codingClubService.leaveClub(request.getUserId());
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
        return codingClubService.getMemberCount();
    }
    
    @GetMapping("/members")
    public List<Coding> getAllMembers() {
        return codingClubService.getAllMembers();
    }
}
