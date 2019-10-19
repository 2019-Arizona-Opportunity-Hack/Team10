package com.st.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.st.model.Patient;
import com.st.repository.PatientRepository;

@RestController
public class patientController 
{
	@Autowired
	PatientRepository repository;
	
	@GetMapping("/patient")
	public List<Patient> findAllPatients()
	{
		return repository.findAllPatients();
	}
	
}
