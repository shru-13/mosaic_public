package com.example.mosaicmgmt.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Register;
import com.example.mosaicmgmt.repo.RegisterRepo;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepo userRepository;
    

    public Register saveUser(Register register) {
        return userRepository.save(register);
    }
    
    public Optional<Register> loginUser(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
    
    public Optional<Register> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    
}
