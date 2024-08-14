package com.example.mosaicmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.mosaicmgmt.entity.Blog;
import com.example.mosaicmgmt.services.BlogService;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "http://localhost:3000")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping
    public Blog createBlog(@RequestParam("fullname") String fullname,
                           @RequestParam("email") String email,
                           @RequestParam("title") String title,
                           @RequestParam("description") String description) {
        Blog blog = new Blog();
        blog.setFullname(fullname);
        blog.setEmail(email);
        blog.setTitle(title);
        blog.setDescription(description);

        return blogService.saveBlog(blog);
    }

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }
}
