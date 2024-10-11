package com.example.docwebsite.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private JwtTokenAuthenticationFilter jwtTokenAuthenticationFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // CSRF protection can be disabled for stateless REST APIs
            .csrf().disable()
            // Enable CORS with default settings
            .cors().and()
            // Define which requests should be authorized
            .authorizeRequests()
                // Permit all requests to the register and login endpoints
                .antMatchers("/api/register", "/api/login", "/api/user/**").permitAll()
                
                // All other requests should be authenticated
                .anyRequest().authenticated()
            .and()
            .addFilterBefore(jwtTokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
            
            
            
    }

    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
  
        auth
            .inMemoryAuthentication()
            .withUser("user@example.com")
            .password(passwordEncoder().encode("password"))
            .roles("USER");
    }

    
}