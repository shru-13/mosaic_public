//package com.example.mosaicmgmt.services;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import com.example.mosaicmgmt.entity.Coding;
//import com.example.mosaicmgmt.repo.CodingRepo;
//
//@Service
//public class CodingService {
//
//    @Autowired
//    private CodingRepo codingClubRepo;
//
//    public Coding joinClub(Coding member) {
//        return codingClubRepo.save(member);
//    }
//}
package com.example.mosaicmgmt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mosaicmgmt.entity.Coding;
import com.example.mosaicmgmt.entity.Music;
import com.example.mosaicmgmt.repo.CodingRepo;

import jakarta.transaction.Transactional;

@Service
public class CodingService {

    @Autowired
    private CodingRepo codingClubRepo;

    @Transactional
    public Coding joinClub(Coding member) {
        return codingClubRepo.save(member);
    }

    @Transactional
    public void leaveClub(Long userId) {
        codingClubRepo.deleteByUserId(userId);
    }
    
    public long getMemberCount() {
        return codingClubRepo.count();
    }
    
    
    public List<Coding> getAllMembers() {
        return codingClubRepo.findAll();
    }
}
