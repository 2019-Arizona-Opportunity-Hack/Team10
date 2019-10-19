package com.st.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.st.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Long, Patient> 
{
	public Patient findPatientById(Long id);
	public List<Patient> findAllPatients();
	public Patient findPatientByfName(String name);
 

}
