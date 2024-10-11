package com.example.docwebsite;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import org.springframework.stereotype.Service;
import java.util.Base64;
import java.io.ByteArrayInputStream;


import com.example.docwebsite.dto.UserProfileDto;

@Service
public class UserService {

    public void registerUser(String email, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoder.encode(password);

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement ps = connection.prepareStatement("INSERT INTO emailPassword (email, password) VALUES (?, ?)")) {
            ps.setString(1, email);
            ps.setString(2, hashedPassword);
            ps.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException("Error registering user", e);
        }
    }
    public String loginUser(String email, String password) {
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement ps = connection.prepareStatement("SELECT password FROM emailPassword WHERE email = ?")) {
            ps.setString(1, email);
    
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String hashedPassword = rs.getString("password");
                    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
                    if (encoder.matches(password, hashedPassword)) {
                        // Generate JWT token
                        return JwtUtil.generateToken(email);
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Error logging in user", e);
        }
        return null; // Or throw an exception
    }
    

    public UserProfileDto getUserProfile(String email) {
        UserProfileDto profile = new UserProfileDto();
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement ps = connection.prepareStatement("SELECT * FROM emailPassword WHERE email = ?")) {
            ps.setString(1, email);

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    profile.setFullName(rs.getString("fullName"));
                    profile.setGender(rs.getString("gender"));
                    profile.setAge(rs.getInt("age"));
                    profile.setTelephone(rs.getString("telephone"));
                    profile.setPostcode(rs.getString("postcode"));
                    profile.setHealthCondition(rs.getString("healthCondition"));
                    profile.setHeight(rs.getBigDecimal("height"));
                    profile.setWeight(rs.getBigDecimal("weight"));
                    byte[] imageBytes = rs.getBytes("profileImage");
                    profile.setProfileImageBytes(imageBytes); 
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Error fetching user profile", e);
        }
        return profile;
    }

public void updateUserProfile(String email, UserProfileDto profileDto) {
    try (Connection connection = DatabaseConnection.getConnection();
         PreparedStatement ps = connection.prepareStatement("UPDATE emailPassword SET fullName = ?, gender = ?, age = ?, telephone = ?, postcode = ?, healthCondition = ?, height = ?, weight = ?, profileImage = ? WHERE email = ?")) {
        ps.setString(1, profileDto.getFullName());
        ps.setString(2, profileDto.getGender());
        ps.setInt(3, profileDto.getAge());
        ps.setString(4, profileDto.getTelephone());
        ps.setString(5, profileDto.getPostcode());
        ps.setString(6, profileDto.getHealthCondition());
        ps.setBigDecimal(7, profileDto.getHeight());
        ps.setBigDecimal(8, profileDto.getWeight());

        if (profileDto.getProfileImageBytes() != null) {
            ps.setBytes(9, profileDto.getProfileImageBytes());
            
        } else {
            ps.setNull(9, java.sql.Types.BLOB);
        }
        
        

        ps.setString(10, email);
        ps.executeUpdate();
    } catch (Exception e) {
        throw new RuntimeException("Error updating user profile", e);
    }
}

}




