package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.mosaicmgmt.entity.Sports;

@Repository
public interface SportsRepo extends JpaRepository<Sports, Long> {
	 void deleteByUserId(Long userId);
	 
}
