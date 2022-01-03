package com.example.demo.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Specialite {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long idSpec;
	private String nomSpec;
	private String description ;
	
	@OneToMany (mappedBy= "specialite")
	@JsonIgnore
	private List<Medecin> medecins;
	
	
	public Specialite() {
		super();
	
	}
	public Specialite( String nomSpec, String description) {
		super();
		this.nomSpec = nomSpec;
		this.description = description;
	}
	public Long getIdSpec() {
		return idSpec;
	}
	public void setIdSpec(Long idSpec) {
		this.idSpec = idSpec;
	}
	public String getNomSpec() {
		return nomSpec;
	}
	public void setNomSpec(String nomSpec) {
		this.nomSpec = nomSpec;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public List<Medecin> getMedecins() {
		return medecins;
	}
	public void setMedecins(List<Medecin> medecins) {
		this.medecins = medecins;
	}
	@Override
	public String toString() {
		return "Specialite [idSpec=" + idSpec + ", nomSpec=" + nomSpec + ", description=" + description + "]";
	}
	
	
	
}
