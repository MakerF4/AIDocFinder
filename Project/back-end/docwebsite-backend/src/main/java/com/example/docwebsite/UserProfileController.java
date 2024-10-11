package com.example.docwebsite;

import com.example.docwebsite.dto.UserProfileDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Base64;
import java.util.Arrays;
@RestController
@RequestMapping("/api/user")
public class UserProfileController {

    private final UserService userService;

    @Autowired
    public UserProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/profile/{userEmail}")
    public ResponseEntity<?> getUserProfile(@PathVariable String userEmail) {
        try {
            UserProfileDto userProfile = userService.getUserProfile(userEmail);
            if (userProfile != null) {
                // Check if there's an image to convert
                if (userProfile.getProfileImageBytes() != null) {
                    // Convert byte array to Base64 String
                    String imageBase64 = Base64.getEncoder().encodeToString(userProfile.getProfileImageBytes());
                    
                    userProfile.setProfileImage(imageBase64);
                    //System.out.println(userProfile.getProfileImageBytes());
                }
                return ResponseEntity.ok(userProfile);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to fetch user profile due to an internal error.");
        }
    }
    

    @PutMapping(value = "/profile/{userEmail}", consumes = "application/json")
    public ResponseEntity<?> updateUserProfile(@PathVariable String userEmail, @RequestBody UserProfileDto profileDto) {
        try {
            
            
            if (profileDto.getProfileImage() != null && !profileDto.getProfileImage().isEmpty()) {
                byte[] imageBytes = Base64.getDecoder().decode(profileDto.getProfileImage());
                
                profileDto.setProfileImageBytes(imageBytes); 
                
            }
            
            userService.updateUserProfile(userEmail, profileDto);
            return ResponseEntity.ok("Profile updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid Base64 image data.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred updating the profile: " + e.getMessage());
        }
    }
}

