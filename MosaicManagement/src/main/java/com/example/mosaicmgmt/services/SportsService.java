package com.example.mosaicmgmt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Arts;
import com.example.mosaicmgmt.entity.Sports;
import com.example.mosaicmgmt.repo.SportsRepo;

import jakarta.transaction.Transactional;

@Service
public class SportsService {

    @Autowired
    private SportsRepo sportsRepository;

    @Transactional
    public Sports joinClub(Sports sports) {
        return sportsRepository.save(sports);
    }
    
    @Transactional
    public void removeMember(Long userId) {
        // Implement logic to remove user from the club
        sportsRepository.deleteByUserId(userId);
    }
    
    public long getMemberCount() {
        return sportsRepository.count();
    }
    
    public List<Sports> getAllMembers() {
        return sportsRepository.findAll();
    }
    
    
}
