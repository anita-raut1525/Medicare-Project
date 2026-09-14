package com.medicare.backend.controller;

import com.medicare.backend.model.Doctor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {

    @GetMapping("/api/doctors")
    public List<Doctor> getDoctors() {

        return List.of(
            new Doctor(1L, "Dr. Rahul", "Cardiologist", 10),
            new Doctor(2L, "Dr. Priya Singh", "Dermatologist", 8),
            new Doctor(3L, "Dr. Prisha Patel", "General Physician", 12)
        );
    }
}
