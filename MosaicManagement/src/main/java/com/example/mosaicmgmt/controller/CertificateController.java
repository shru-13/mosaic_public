//package com.example.mosaicmgmt.controller;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.example.mosaicmgmt.entity.Certificate;
//import com.example.mosaicmgmt.services.CertificateService;
//
//@RestController
//@RequestMapping("/certificates")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CertificateController {
//
//    @Autowired
//    private CertificateService certificateService;
//
//    // Endpoint to send a certificate
//    @PostMapping("/send")
//    public ResponseEntity<String> sendCertificate(@RequestBody CertificateRequest request) {
//        Certificate certificate = certificateService.createCertificate(request.getFullName(), request.getDegree(), request.getEmail());
//        // Logic to send the certificate via email can be added here
//        return ResponseEntity.ok("Certificate sent successfully!");
//    }
//
//    // Endpoint to fetch certificates for a specific user
//    @GetMapping("/my-certificates")
//    public ResponseEntity<List<Certificate>> getMyCertificates(@RequestParam String fullName) {
//        List<Certificate> certificates = certificateService.findByFullName(fullName);
//        return ResponseEntity.ok(certificates);
//    }
//}
//
//// Data Transfer Object (DTO) for Certificate requests
//class CertificateRequest {
//    private String fullName;
//    private String degree;
//    private String email;
//
//    // Getters and Setters
//    public String getFullName() {
//        return fullName;
//    }
//
//    public void setFullName(String fullName) {
//        this.fullName = fullName;
//    }
//
//    public String getDegree() {
//        return degree;
//    }
//
//    public void setDegree(String degree) {
//        this.degree = degree;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//}
