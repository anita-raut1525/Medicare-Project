package com.medicare.backend.model;

public class Doctor {

    private Long id;
    private String name;
    private String specialty;
    private int experience;

    public Doctor(Long id, String name, String specialty, int experience) {
        this.id = id;
        this.name = name;
        this.specialty = specialty;
        this.experience = experience;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSpecialty() {
        return specialty;
    }

    public int getExperience() {
        return experience;
    }
}
