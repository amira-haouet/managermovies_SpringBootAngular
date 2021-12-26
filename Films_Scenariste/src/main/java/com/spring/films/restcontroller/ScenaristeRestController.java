package com.spring.films.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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


	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Scenariste getScenaristeById(@PathVariable("id") Long id) {
		return scenaristeService.getScenariste(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Scenariste createFilm(@RequestBody Scenariste scenariste) {
		return scenaristeService.saveScenariste(scenariste);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Scenariste updateProduit(@RequestBody Scenariste scenariste) {
		return scenaristeService.updateScenariste(scenariste);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteFilm(@PathVariable("id") Long id) {
		scenaristeService.deleteScenaristeById(id);
	}

	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<Scenariste> getAllFilms1() {
		return scenaristeService.getAllScenaristes();
	}

}
