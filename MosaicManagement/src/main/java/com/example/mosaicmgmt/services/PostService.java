package com.example.mosaicmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Post;
import com.example.mosaicmgmt.repo.PostRepo;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepo postRepository;

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
}
