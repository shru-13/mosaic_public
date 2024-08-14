package com.example.mosaicmgmt.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mosaicmgmt.entity.Register;

public interface RegisterRepo extends JpaRepository<Register, Long> {
    Optional<Register> findByUsernameAndPassword(String username, String password);
    Optional<Register> findByUsername(String username);
    Optional<Register> findByEmail(String email);
}
