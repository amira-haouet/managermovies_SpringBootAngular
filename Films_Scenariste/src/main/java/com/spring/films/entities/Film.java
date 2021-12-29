package com.spring.films.entities;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Film {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFilm;
	private String titre;
	private Double prixticket;
	private Date dateSortie;
		@ManyToOne
	private Scenariste scenariste;

	public Film() {
		super();
	}

	public Film(String titre, Double prixticket, Date dateSortie) {
		super();

		this.titre = titre;
		this.prixticket = prixticket;
		this.dateSortie = dateSortie;
	}
	
	public Film(String titre, Double prixticket, Date dateSortie,Scenariste scenariste) {
		super();

		this.titre = titre;
		this.prixticket = prixticket;
		this.dateSortie = dateSortie;
		this.scenariste= scenariste;
	}

	public Long getIdFilm() {
		return idFilm;
	}

	public void setIdFilm(Long idFilm) {
		this.idFilm = idFilm;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Double getPrixticket() {
		return prixticket;
	}

	public void setPrixticket(Double prixticket) {
		this.prixticket = prixticket;
	}

	public Date getDateSortie() {
		return dateSortie;
	}

	public void setDateSortie(Date dateSortie) {
		this.dateSortie = dateSortie;
	}

	@Override
	public String toString() {
		return "Film [idFilm=" + idFilm + ", titre=" + titre + ", prixticket=" + prixticket + ", dateSortie="
				+ dateSortie + ", scenariste=" + scenariste + "]";
	}

	public Scenariste getScenariste() {
		return scenariste;
	}

	public void setScenariste(Scenariste scenariste) {
		this.scenariste = scenariste;
	}
	
	

}
