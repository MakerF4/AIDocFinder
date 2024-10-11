package com.example.docwebsite;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import java.util.Date;

public class JwtUtil {
    private static final String SECRET_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZXQxMEBnbWFpbC5jb20iLCJleHAiOjE3MDgyNjgyMzV9.wPzRBdlQBhXwf5Vp-GbDT58jhQ2ItrWadxLpB8r-Ip-96qZmWkij2D0VdGIA1Bu5u8gmTRoF8WGcsssmmKT91g\n" + //
            ""; 

    public static String generateToken(String userEmail) {
        return JWT.create()
            .withSubject(userEmail)
            .withExpiresAt(new Date(System.currentTimeMillis() + 864000000)) // 10 days
            .sign(Algorithm.HMAC512(SECRET_KEY.getBytes()));
    }

    
}