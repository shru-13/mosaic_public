//package com.example.mosaicmgmt.services;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.mosaicmgmt.entity.Certificate;
//import com.example.mosaicmgmt.repo.CertificateRepo;
//
//@Service
//public class CertificateService {
//
//    @Autowired
//    private CertificateRepo certificateRepository;
//
//    public Certificate createCertificate(String fullName, String degree, String email) {
//        Certificate certificate = new Certificate();
//        certificate.setFullName(fullName);
//        certificate.setDegree(degree);
//        certificate.setEmail(email);
//        return certificateRepository.save(certificate);
//    }
//
//    public List<Certificate> findByFullName(String fullName) {
//        return certificateRepository.findByFullName(fullName);
//    }
//    // Additional methods for sending certificates via email, if needed
//}
//
