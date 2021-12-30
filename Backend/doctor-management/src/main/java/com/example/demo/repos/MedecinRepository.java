package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entities.Movie;


public interface MedecinRepository extends JpaRepository<Movie, Long> {

	
	List<Movie> findBySpecialiteNomSpec(String nomSpec);
}
