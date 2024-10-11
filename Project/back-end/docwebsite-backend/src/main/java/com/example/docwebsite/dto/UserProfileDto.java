package com.example.docwebsite.dto;

import java.math.BigDecimal;



public class UserProfileDto {
    private String fullName;
    private String gender;
    private Integer age;
    private String telephone;
    private String postcode;
    private String healthCondition;
    private BigDecimal height;
    private BigDecimal weight;
    private byte[] profileImageBytes;
    private String profileImage;


    // Default constructor
    public UserProfileDto() {
    }

    // Getters
    public String getFullName() {
        return fullName;
    }
    public String getProfileImage() {
        return profileImage;
    }

    public String getGender() {
        return gender;
    }

    public Integer getAge() {
        return age;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getPostcode() {
        return postcode;
    }

    public String getHealthCondition() {
        return healthCondition;
    }

    public BigDecimal getHeight() {
        return height;
    }

    public BigDecimal getWeight() {
        return weight;
    }
    public byte[] getProfileImageBytes() {
        return profileImageBytes;
    }

    // Setters
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public void setHealthCondition(String healthCondition) {
        this.healthCondition = healthCondition;
    }

    public void setHeight(BigDecimal height) {
        this.height = height;
    }

    public void setWeight(BigDecimal weight) { 
        this.weight = weight;
    }

    public void setProfileImageBytes(byte[] profileImageBytes) {
        this.profileImageBytes = profileImageBytes;
    }
    public void setProfileImage(String profileImage){
        this.profileImage = profileImage;
    }
}

