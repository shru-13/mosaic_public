//package com.example.mosaicmgmt.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.mosaicmgmt.entity.Arts;
//import com.example.mosaicmgmt.repo.ArtRepo;
//
//@Service
//public class ArtService {
//    @Autowired
//    private ArtRepo artClubMemberRepository;
//
//    public void joinClub(Long userId, String userName, String email) {
//        Arts member = new Arts();
//        member.setUserId(userId);
//        member.setUserName(userName);
//        member.setEmail(email);
//        artClubMemberRepository.save(member);
//    }
//}
//package com.example.mosaicmgmt.services;

//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.mosaicmgmt.entity.Arts;
//import com.example.mosaicmgmt.repo.ArtRepo;
//
//@Service
//public class ArtService {
//    @Autowired
//    private ArtRepo artClubMemberRepository;
//
//    public void joinClub(Long userId, String userName, String email) {
//        Arts member = new Arts();
//        member.setUserId(userId);
//        member.setUserName(userName);
//        member.setEmail(email);
//        artClubMemberRepository.save(member);
//    }
//
//}

//
//
//
//package com.example.mosaicmgmt.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.mosaicmgmt.entity.Arts;
//import com.example.mosaicmgmt.repo.ArtRepo;
//
//@Service
//public class ArtService {
//    @Autowired
//    private ArtRepo artClubMemberRepository;
//
//    public void joinClub(Long userId, String userName, String email) {
//        Arts member = new Arts();
//        member.setUserId(userId);
//        member.setUserName(userName);
//        member.setEmail(email);
//        artClubMemberRepository.save(member);
//    }
//
//    public void leaveClub(Long userId) {
//        artClubMemberRepository.deleteByUserId(userId);
//    }
//}


//
//package com.example.mosaicmgmt.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.example.mosaicmgmt.entity.Arts;
//import com.example.mosaicmgmt.repo.ArtRepo;
//
//@Service
//public class ArtService {
//    @Autowired
//    private ArtRepo artClubMemberRepository;
//
//    @Transactional
//    public void joinClub(Long userId, String userName, String email) {
//        Arts member = new Arts();
//        member.setUserId(userId);
//        member.setUserName(userName);
//        member.setEmail(email);
//        artClubMemberRepository.save(member);
//    }
//
//    @Transactional
//    public void leaveClub(Long userId) {
//        artClubMemberRepository.deleteByUserId(userId);
//    }
//}


package com.example.mosaicmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.mosaicmgmt.entity.Arts;
import com.example.mosaicmgmt.repo.ArtRepo;
import java.util.List;

@Service
public class ArtService {
    @Autowired
    private ArtRepo artClubMemberRepository;

    @Transactional
    public void joinClub(Long userId, String userName, String email) {
        Arts member = new Arts();
        member.setUserId(userId);
        member.setUserName(userName);
        member.setEmail(email);
        artClubMemberRepository.save(member);
    }

    @Transactional
    public void leaveClub(Long userId) {
        artClubMemberRepository.deleteByUserId(userId);
    }

    public List<Arts> getAllMembers() {
        return artClubMemberRepository.findAll();
    }
    
    public long getMemberCount() {
        return artClubMemberRepository.count();
    }
}
