package com.st.therapist.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.st.therapist.model.Therapist;

@Repository
public interface TherapistRepository extends CrudRepository<Long, Therapist>
{
	public Therapist findTherapistById(Long id);
	public List<Therapist> findAllTherapists();
	public Therapist findTherapistByName(String name);
}
