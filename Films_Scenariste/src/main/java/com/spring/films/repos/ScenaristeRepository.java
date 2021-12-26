package com.spring.films.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.spring.films.entities.Scenariste;

//@RepositoryRestResource(path = "sc")

public interface ScenaristeRepository extends JpaRepository<Scenariste, Long> {

}
