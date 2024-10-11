package com.example.docwebsite;

import com.example.docwebsite.dto.UserLoginDto;
import com.example.docwebsite.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegistrationDto registrationDto) {
        try {
            userService.registerUser(registrationDto.getEmail(), registrationDto.getPassword());
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

// In ApiController.java
@PostMapping("/login")
public ResponseEntity<String> login(@RequestBody UserLoginDto loginDto) {
    String token = userService.loginUser(loginDto.getEmail(), loginDto.getPassword());
    if (token != null) {
        return ResponseEntity.ok(token);
    } else {
        return ResponseEntity.status(401).body("Invalid email or password");
    }
}

    
}






