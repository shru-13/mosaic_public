	package com.example.mosaicmgmt.controller;
	
	import com.example.mosaicmgmt.entity.Participate;
	import com.example.mosaicmgmt.repo.ParticipateRepo;
	import com.example.mosaicmgmt.services.ParticipateService;
	
	import java.util.List;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.*;
	
	@RestController
	@RequestMapping("/part")
	@CrossOrigin(origins = "http://localhost:3000")
	public class ParticipateController {
	
	    @Autowired
	    private ParticipateService userService;
	    
	    @Autowired
	    private ParticipateRepo repo;
	
	    @PostMapping("/join")
	    public Participate joinClub(@RequestBody Participate user) {
	        return userService.saveUser(user);
	    }
	    
	    @GetMapping("/join")
	    public List<Participate> getParticipants(@RequestParam(value = "clubName", required = false) String clubName) {
	        if (clubName != null) {
	            return repo.findByClubName(clubName);
	        }
	        return repo.findAll();
	    }
	    
	    @GetMapping("/countByClub")
	    public long countByClub(@RequestParam String clubName) {
	        return userService.countByClubName(clubName);
	    }
	
	    @GetMapping("/countByEvent")
	    public long countByEvent(@RequestParam String eventName) {
	        return userService.countByEventName(eventName);
	    }
	    
	    @GetMapping("/artadmin")
	    public List<Participate> getArtClubParticipants() {
	        return repo.findByClubName("Art");
	    }
	    
	    @GetMapping("/sportadmin")
	    public List<Participate> getSportsClubParticipants() {
	        return repo.findByClubName("Sports");
	    }
	    
	    @GetMapping("/musicadmin")
	    public List<Participate> getMusicClubParticipants() {
	        return repo.findByClubName("Music");
	    }
	    
	    @GetMapping("/codingadmin")
	    public List<Participate> getCodingClubParticipants() {
	        return repo.findByClubName("Coding");
	    }
	    
	    
	    @DeleteMapping("/delete")
	    public void deleteParticipant(@RequestParam String fullName, @RequestParam String eventName) {
	        userService.deleteByFullNameAndEventName(fullName, eventName);
	    }
	}
