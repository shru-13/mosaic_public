//package com.example.mosaicmgmt.repo;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//import com.example.mosaicmgmt.entity.Coding;
//
//@Repository
//public interface CodingRepo extends JpaRepository<Coding, Long> {
//}

package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mosaicmgmt.entity.Coding;

public interface CodingRepo extends JpaRepository<Coding, Long> {
    void deleteByUserId(Long userId);
}
