package com.spring.films.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.films.entities.Scenariste;
import com.spring.films.service.ScenaristeService;

@RestController
@RequestMapping("/apisc")
@CrossOrigin
public class ScenaristeRestController {

	@Autowired

	ScenaristeService scenaristeService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Scenariste> getAllScenaristes() {

		return scenaristeService.getAllScenaristes();
	}

}

	@RequestMapping(value="/{id}",method=RequestMethod.GET)public Film

	getFilmById(@PathVariable("id") Long id) { return filmService.getFilm(id); }

	@RequestMapping(method = RequestMethod.POST)
	public Film createFilm(@RequestBody Film film) {
		return filmService.saveFilm(film);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Film updateProduit(@RequestBody Film film) {
		return filmService.updateFilm(film);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteFilm(@PathVariable("id") Long id) {
		filmService.deleteFilmById(id);
	}

	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<Film> getAllFilms1() {
		return filmService.getAllFilms();
	}

}
