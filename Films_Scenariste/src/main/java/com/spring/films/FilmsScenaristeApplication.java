package com.spring.films;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.spring.films.repos.FilmRepository;
import com.spring.films.service.FilmService;
import com.spring.films.service.ScenaristeService;
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })


//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class FilmsScenaristeApplication {

	@Autowired
	FilmService filmService;
	//@Autowired
	//ScenaristeService scenaristeService;

	
	//@Autowired
	//FilmRepository  filmRepositoty;
	/*@Autowired
	ScenaristeService scService;*/
	public static void main(String[] args) {
		SpringApplication.run(FilmsScenaristeApplication.class, args);
	}

	
		
}
