package com.example.mosaicmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.mosaicmgmt.entity.Register;
import com.example.mosaicmgmt.repo.RegisterRepo;

import java.util.Optional;

@RestController
@RequestMapping("/profile")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    @Autowired
    private RegisterRepo registerRepo;

    @GetMapping("/{email}")
    public ResponseEntity<Register> getProfile(@PathVariable String email) {
        Optional<Register> user = registerRepo.findByEmail(email);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<Register> updateProfile(@RequestBody Register updatedProfile) {
        Optional<Register> existingUser = registerRepo.findById(updatedProfile.getId());
        if (existingUser.isPresent()) {
            Register user = existingUser.get();
            user.setName(updatedProfile.getName());
            user.setPhone(updatedProfile.getPhone());
            user.setGender(updatedProfile.getGender());
            user.setInstitution(updatedProfile.getInstitution());
            user.setDegree(updatedProfile.getDegree());
            user.setAddress(updatedProfile.getAddress());
            Register savedUser = registerRepo.save(user);
            return ResponseEntity.ok(savedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
