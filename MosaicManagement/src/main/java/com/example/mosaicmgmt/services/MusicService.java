package com.example.mosaicmgmt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Music;
import com.example.mosaicmgmt.entity.Sports;
import com.example.mosaicmgmt.repo.MusicRepo;

import jakarta.transaction.Transactional;

@Service
public class MusicService {

    @Autowired
    private MusicRepo musicRepository;

    @Transactional
    public Music joinMusicClub(Music music) {
        return musicRepository.save(music);
    }
    
    @Transactional
    public void leaveClub(Long userId) {
        musicRepository.deleteByUserId(userId);
    }
    
    public long getMemberCount() {
        return musicRepository.count();
    }
    
    public List<Music> getAllMembers() {
        return musicRepository.findAll();
    }
}
