package com.spring.films;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import java.util.List;

import com.spring.films.entities.Film;
import com.spring.films.repos.FilmRepository;

@SpringBootTest
class FilmsScenaristeApplicationTests {

	@Autowired
	private FilmRepository filmRepository;

	@Test
	public void testCreateFilm() {
		Film film = new Film("Filmx", 22.500, new Date());
		filmRepository.save(film);
	}

	@Test
	public void testFindProduit() {
		Film f = filmRepository.findById(1L).get();

		System.out.println(f);
	}

	@Test
	public void testUpdateProduit() {
		Film f = filmRepository.findById(1L).get();
		f.setPrixticket(10.0);
		filmRepository.save(f);
	}

	@Test
	public void testDeleteFilm() {
		filmRepository.deleteById(1L);
		;
	}

	@Test
	public void testListerTousProduits() {
		List<Film> films = filmRepository.findAll();
		for (Film f : films) {
			System.out.println(f);
		}

	}

	/*
	 * @Test public void testFindBytitreFilm() { List<Film> films =
	 * filmRepository.findBytitreFilm("Dora");
	 * 
	 * for (Film f : films) { System.out.println(f); }
	 * 
	 * }
	 * 
	 * @Test public void findByTitreFilmContains() { List<Film> films =
	 * filmRepository.findByTitreFilmContains("Dora"); for (Film f : films) {
	 * System.out.println(f); } }
	 * 
	 */
	/*@Test
	public void testfindByTitrePrix() {
		List<Film> films = filmRepository.findByTitrePrix("Dora", 22.5);
		for (Film p : films) {
			System.out.println(p);
		}

	}*/
}
