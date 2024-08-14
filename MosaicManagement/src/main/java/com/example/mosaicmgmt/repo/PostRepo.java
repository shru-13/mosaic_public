package com.example.mosaicmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mosaicmgmt.entity.Post;

public interface PostRepo extends JpaRepository<Post, Long> {
}
