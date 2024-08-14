//package com.example.mosaicmgmt.controller;
//
//import com.example.mosaicmgmt.entity.Profile;
//import com.example.mosaicmgmt.entity.Register;
//import com.example.mosaicmgmt.repo.ProfileRepo;
////import com.example.mosaicmgmt.services.EmailService;
//import com.example.mosaicmgmt.services.RegisterService;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class RegisterController {
//
//    @Autowired
//    private RegisterService registerService;
//    
//    @Autowired
//    private ProfileRepo profileRepository;
//    
//    @PostMapping("/reg")
//    public ResponseEntity<Register> registerUser(@RequestBody Register register) {
//        Register savedUser = registerService.saveUser(register);
//        
//        return ResponseEntity.ok(savedUser);
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody Register loginRequest) {
//        Optional<Register> user = registerService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
//        if (user.isPresent()) {
//            return ResponseEntity.ok(user.get());
//        } else {
//            return ResponseEntity.status(401).body("Invalid username or password");
//        }
//    }
//}










package com.example.mosaicmgmt.controller;

import com.example.mosaicmgmt.entity.Register;
import com.example.mosaicmgmt.repo.RegisterRepo;
//import com.example.mosaicmgmt.services.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

//	@Autowired
//	private EmailService email;
	
    @Autowired
    private RegisterRepo registerRepo;

    @PostMapping("/reg")
    public ResponseEntity<Register> registerUser(@RequestBody Register register) {
        Register savedUser = registerRepo.save(register);
        return ResponseEntity.ok(savedUser);
    }
//       email.sendWelcomeEmail(register.getEmail(),"Welcome to Mosaic!!!","Hello, "+register.getName()+"\n Thank you for joining our platform. Feel free to contact us for any concerns. \n With Best Regards, \n Team Mosaic Management");

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Register loginRequest) {
        Optional<Register> user = registerRepo.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

//    @GetMapping("/clubCounts")
//    public ResponseEntity<Map<String, Long>> getClubCounts() {
//        Map<String, Long> clubCounts = registerRepo.findAll().stream()
//                .collect(Collectors.groupingBy(Register::getClub, Collectors.counting()));
//        return ResponseEntity.ok(clubCounts);
//    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<Register>> getAllUsers() {
        List<Register> users = registerRepo.findAll();
        return ResponseEntity.ok(users);
    }
}

