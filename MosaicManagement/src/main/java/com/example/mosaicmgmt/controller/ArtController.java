package com.example.mosaicmgmt.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import com.example.mosaicmgmt.services.ArtService;
//
//@RestController
//@RequestMapping("/arts")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ArtController {
//    @Autowired
//    private ArtService artClubService;
//
//    @PostMapping("/join")
//    public void joinClub(@RequestBody JoinRequest request) {
//        artClubService.joinClub(request.getUserId(), request.getUserName(), request.getEmail());
//    }
//
//    static class JoinRequest {
//        private Long userId;
//        private String userName;
//        private String email;
//
//        // Getters and Setters
//        public Long getUserId() {
//            return userId;
//        }
//
//        public void setUserId(Long userId) {
//            this.userId = userId;
//        }
//
//        public String getUserName() {
//            return userName;
//        }
//
//        public void setUserName(String userName) {
//            this.userName = userName;
//        }
//
//        public String getEmail() {
//            return email;
//        }
//
//        public void setEmail(String email) {
//            this.email = email;
//        }
//    }
//}

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaicmgmt.services.ArtService;

//@RestController
//@RequestMapping("/arts")
//@CrossOrigin(origins = "http://localhost:3000")
//public class ArtController {
//
//    @Autowired
//    private ArtService artClubService;
//
//    @PostMapping("/join")
//    public void joinClub(@RequestBody JoinRequest request) {
//        artClubService.joinClub(request.getUserId(), request.getUserName(), request.getEmail());
//    }
//
//    @DeleteMapping("/leave")
//    public void leaveClub(@RequestBody LeaveRequest request) {
//        artClubService.leaveClub(request.getUserId());
//    }
//
//    static class JoinRequest {
//        private Long userId;
//        private String userName;
//        private String email;
//
//        // Getters and Setters
//        public Long getUserId() {
//            return userId;
//        }
//
//        public void setUserId(Long userId) {
//            this.userId = userId;
//        }
//
//        public String getUserName() {
//            return userName;
//        }
//
//        public void setUserName(String userName) {
//            this.userName = userName;
//        }
//
//        public String getEmail() {
//            return email;
//        }
//
//        public void setEmail(String email) {
//            this.email = email;
//        }
//    }
//
//    static class LeaveRequest {
//        private Long userId;
//
//        // Getters and Setters
//        public Long getUserId() {
//            return userId;
//        }
//
//        public void setUserId(Long userId) {
//            this.userId = userId;
//        }
//    }
//}




//package com.example.mosaicmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.mosaicmgmt.services.ArtService;
import com.example.mosaicmgmt.entity.Arts;
import java.util.List;

@RestController
@RequestMapping("/arts")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtController {

    @Autowired
    private ArtService artClubService;

    @PostMapping("/join")
    public void joinClub(@RequestBody JoinRequest request) {
        artClubService.joinClub(request.getUserId(), request.getUserName(), request.getEmail());
    }

    @DeleteMapping("/leave")
    public void leaveClub(@RequestBody LeaveRequest request) {
        artClubService.leaveClub(request.getUserId());
    }

    @GetMapping("/members")
    public List<Arts> getAllMembers() {
        return artClubService.getAllMembers();
    }

    static class JoinRequest {
        private Long userId;
        private String userName;
        private String email;

        // Getters and Setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }

    static class LeaveRequest {
        private Long userId;

        // Getters and Setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }
    }
    
    @GetMapping("/count")
    public long getMemberCount() {
        return artClubService.getMemberCount();
    }
}

