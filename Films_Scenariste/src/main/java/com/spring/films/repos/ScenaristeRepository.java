package com.spring.films.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.spring.films.entities.Film;
import com.spring.films.entities.Scenariste;

@RepositoryRestResource(path = "sc")

public interface ScenaristeRepository extends JpaRepository<Scenariste, Long> {
	@Query("SELECT s FROM Scenariste s ")
	public List<Film> findAll(String keyword);

	@Query("SELECT f FROM Film f WHERE f.scenariste LIKE %?1%")
	public List<Film> findbyScenariste(String scenariste);

}
