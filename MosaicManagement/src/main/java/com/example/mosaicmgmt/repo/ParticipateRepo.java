package com.example.mosaicmgmt.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaicmgmt.entity.Participate;

public interface ParticipateRepo extends JpaRepository<Participate, Long> {
    List<Participate> findByClubName(String clubName);
 long countByClubName(String clubName);
    
 Participate findByFullNameAndEventName(String fullName, String eventName); 
    long countByEventName(String eventName);
}
