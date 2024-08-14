package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mosaicmgmt.entity.Music;

@Repository
public interface MusicRepo extends JpaRepository<Music, Long> {
    void deleteByUserId(Long userId);
}
