//package com.example.mosaicmgmt.repo;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.example.mosaicmgmt.entity.Arts;
//
//public interface ArtRepo extends JpaRepository<Arts, Long> {
//    Integer countBy();
//}


package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaicmgmt.entity.Arts;

public interface ArtRepo extends JpaRepository<Arts, Long> {
    Integer countBy();
    void deleteByUserId(Long userId);
}
