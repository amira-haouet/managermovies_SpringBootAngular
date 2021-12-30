package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;
import com.example.demo.repos.MedecinRepository;

@Service
public class MovieServiceImp implements MovieService {

	@Autowired
	MedecinRepository medecinRepository;
	
	@Override
	public Movie saveMedecin(Movie m) {
		return medecinRepository.save(m);
	}

	@Override
	public Movie updateMedecin(Movie m) {
		return medecinRepository.save(m);
	}

	@Override
	public void deleteMedecin(Movie m) {
		 medecinRepository.delete(m);

	}

	@Override
	public void deleteMedecinById(Long id) {
		medecinRepository.deleteById(id);

	}

	@Override
	public Movie getMedecin(Long id) {
		return medecinRepository.findById(id).get();
	}

	@Override
	public List<Movie> getAllMedecin() {
		return medecinRepository.findAll();
	}

	@Override
	public Page<Movie> getAllmedecinPage(int page, int size) {
		return  medecinRepository.findAll(PageRequest.of(page, size));
	}

	@Override
	public List<Movie> findMedecinBySpecialite(String s) {
		return medecinRepository.findBySpecialiteNomSpec(s);
		
	}

}
