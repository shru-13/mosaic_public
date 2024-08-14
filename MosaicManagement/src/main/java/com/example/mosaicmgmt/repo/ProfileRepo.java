package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaicmgmt.entity.Profile;


public interface ProfileRepo extends JpaRepository<Profile, Long> {

    Profile findByEmail(String email);
}
