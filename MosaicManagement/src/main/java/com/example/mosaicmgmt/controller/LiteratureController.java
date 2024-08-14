package com.example.mosaicmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mosaicmgmt.entity.Literature;
import com.example.mosaicmgmt.services.LiteratureService;

@RestController
@RequestMapping("/lit")
public class LiteratureController {

    @Autowired
    private LiteratureService literatureService;

    @PostMapping("/join")
    public Literature joinClub(@RequestBody Literature literature) {
        return literatureService.joinClub(literature);
    }
}
