package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaicmgmt.entity.Literature;

public interface LiteratureRepo extends JpaRepository<Literature, Long> {
}
