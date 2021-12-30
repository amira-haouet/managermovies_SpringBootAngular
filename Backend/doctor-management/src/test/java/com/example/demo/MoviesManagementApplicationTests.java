package com.example.demo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;
import com.example.demo.repos.MovieRepository;
import com.example.demo.repos.ScenaristeRepository;

@SpringBootTest
class MoviesManagementApplicationTests {

	@Autowired
	private MovieRepository medecinRepository;
	@Autowired
	private ScenaristeRepository specialiteRepository;

	@Test
	void contextLoads() {
	}

	 @Test
	
	  void testAddMedecin() { Movie m = new Movie("nom2", "prenom2", new
	  Date()); medecinRepository.save(m); }
	
/*
	@Test
	void testFindMedecin() {
		Movie m = medecinRepository.findById(1L).get();
		System.out.println(m);

	}

	@Test
	void testFindAllMedecin() {
		ArrayList<Movie> m = new ArrayList<>(medecinRepository.findAll());
		for (Movie medecin : m) {
			System.out.println(medecin);
		}
	}

	@Test
	void updateMedecin() {
		Movie m = medecinRepository.findById(1L).get();
		m.setNomMedecin("Jacque");
		medecinRepository.save(m);
	}

	@Test
	void deleteMedecin() {
		Movie m = medecinRepository.findById(1L).get();
		medecinRepository.delete(m);
	}

	@Test
	public void findByCategorieNomSpec() {
		List<Movie> med = medecinRepository.findBySpecialiteNomSpec("ds");
		for (Movie m : med) {
			System.out.println(m);
		}
	}
*/
}
