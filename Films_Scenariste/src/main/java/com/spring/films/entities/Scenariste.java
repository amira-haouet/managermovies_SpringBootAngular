package com.spring.films.entities;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Scenariste {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSc;
	private String nom;
	private String prenom;

	@JsonIgnore
	@OneToMany(mappedBy = "scenariste")
	private List<Film> films;

	public void SetIdSc(long l) {
		this.idSc = l;
	}

	/*
	 * public Scenariste(String nom, String prenom, List<Film> films) { super();
	 * this.nom = nom; this.prenom = prenom; this.films = films; }
	 */

	/*
	 * public Scenariste() { super(); }
	 * 
	 * public Long getIdSc() { return idSc; }
	 * 
	 * public void setIdSc(Long idSc) { this.idSc = idSc; }
	 * 
	 * public String getNom() { return nom; }
	 * 
	 * public void setNom(String nom) { this.nom = nom; }
	 * 
	 * public String getPrenom() { return prenom; }
	 * 
	 * public void setPrenom(String prenom) { this.prenom = prenom; }
	 * 
	 * public List<Film> getFilms() { return films; }
	 * 
	 * public void setFilms(List<Film> films) { this.films = films; }
	 * 
	 */
}
