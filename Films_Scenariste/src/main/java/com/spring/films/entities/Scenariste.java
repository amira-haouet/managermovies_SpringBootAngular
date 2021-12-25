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

}
