package com.st.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient 
{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String fName;
	private String lName;
	private Long phone;
	private String parFName;
	private String parLName;
	private String email;
	private String address;
	private String refReason;
	private String notes;
	//private Date[];
	//private Time[];
	private String[] diagnosis;
	private String[] fundSource;
	private String dOB;
	
	
	
	

	public Patient(Long id, String fName, String lName, Long phone, String parFName, String parLName, String email,
			String address, String refReason, String notes) 
	{
		this.id = id;
		this.fName = fName;
		this.lName = lName;
		this.phone = phone;
		this.parFName = parFName;
		this.parLName = parLName;
		this.email = email;
		this.address = address;
		this.refReason = refReason;
		this.notes = notes;
	}
	
	public String[] getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String[] diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String[] getFundSource() {
		return fundSource;
	}

	public void setFundSource(String[] fundSource) {
		this.fundSource = fundSource;
	}

	public String getdOB() {
		return dOB;
	}

	public void setdOB(String dOB) {
		this.dOB = dOB;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public String getParFName() {
		return parFName;
	}
	public void setParFName(String parFName) {
		this.parFName = parFName;
	}
	public String getParLName() {
		return parLName;
	}
	public void setParLName(String parLName) {
		this.parLName = parLName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRefReason() {
		return refReason;
	}
	public void setRefReason(String refReason) {
		this.refReason = refReason;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public Long getId() {
		return id;
	}
	
	
}
