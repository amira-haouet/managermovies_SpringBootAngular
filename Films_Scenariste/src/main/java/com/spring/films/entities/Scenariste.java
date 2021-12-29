package com.spring.films.entities;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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

	@Override
	public String toString() {
		return "Scenariste [idSc=" + idSc + ", nom=" + nom + ", prenom=" + prenom + ", films=" + films + "]";
	}

	public Long getIdSc() {
		return idSc;
	}

	public void setIdSc(Long idSc) {
		this.idSc = idSc;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public List<Film> getFilms() {
		return films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}

}
