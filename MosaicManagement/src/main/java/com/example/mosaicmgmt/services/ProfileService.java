package com.example.mosaicmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Profile;
import com.example.mosaicmgmt.repo.ProfileRepo;

@Service
public class ProfileService {

    @Autowired
    ProfileRepo repo;

    public Profile getUser(String email) {
        return repo.findByEmail(email);
    }

    public Profile update(Profile details) {
        return repo.save(details);

    }
}