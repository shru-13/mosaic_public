package com.example.mosaicmgmt.services;

import com.example.mosaicmgmt.entity.Participate;
import com.example.mosaicmgmt.repo.ParticipateRepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParticipateService {

    @Autowired
    private ParticipateRepo userRepository;

    public Participate saveUser(Participate user) {
        return userRepository.save(user);
    }
    
    public long countByClubName(String clubName) {
        return userRepository.countByClubName(clubName);
    }

    public long countByEventName(String eventName) {
        return userRepository.countByEventName(eventName);
    }
    
    @Transactional
    public void deleteByFullNameAndEventName(String fullName, String eventName) {
        Participate participant = userRepository.findByFullNameAndEventName(fullName, eventName);
        if (participant != null) {
            userRepository.delete(participant);
        }
    }
    
}
