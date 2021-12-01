package com.spring.films;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.spring.films.repos.FilmRepository;
import com.spring.films.service.FilmService;

@SpringBootApplication
public class FilmsScenaristeApplication {

	@Autowired
	FilmService filmService;
	//@Autowired
	//FilmRepository  filmRepositoty;
	/*@Autowired
	ScenaristeService scService;*/
	public static void main(String[] args) {
		SpringApplication.run(FilmsScenaristeApplication.class, args);
	}

}
