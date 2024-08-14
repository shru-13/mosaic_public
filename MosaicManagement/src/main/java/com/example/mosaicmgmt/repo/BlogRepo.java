package com.example.mosaicmgmt.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.mosaicmgmt.entity.Blog;

public interface BlogRepo extends JpaRepository<Blog, Long> {
}
