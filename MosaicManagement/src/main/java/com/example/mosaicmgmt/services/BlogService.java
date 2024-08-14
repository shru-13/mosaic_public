package com.example.mosaicmgmt.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mosaicmgmt.entity.Blog;
import com.example.mosaicmgmt.repo.BlogRepo;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    private BlogRepo blogRepository;

    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Blog getBlogById(Long id) {
        Optional<Blog> blogOptional = blogRepository.findById(id);
        if (blogOptional.isPresent()) {
            return blogOptional.get();
        } else {
            throw new RuntimeException("Blog not found with id: " + id);
        }
    }
}
