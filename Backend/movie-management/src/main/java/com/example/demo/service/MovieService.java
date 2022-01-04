package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;

public interface MovieService {
	
	Movie saveMedecin(Movie m);
	Movie updateMedecin(Movie m);
	void deleteMedecin(Movie m);
	void deleteMedecinById(Long id);
	Movie getMedecin(Long id);
	List<Movie> getAllMedecin();
	
	Page<Movie>  getAllmedecinPage(int page , int size);
	
	List<Movie> findMedecinBySpecialite(String s);
}
