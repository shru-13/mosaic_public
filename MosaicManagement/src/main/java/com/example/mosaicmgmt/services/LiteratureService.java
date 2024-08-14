package com.example.mosaicmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mosaicmgmt.entity.Literature;
import com.example.mosaicmgmt.repo.LiteratureRepo;

@Service
public class LiteratureService {

    @Autowired
    private LiteratureRepo literatureRepository;

    public Literature joinClub(Literature literature) {
        return literatureRepository.save(literature);
    }
}
