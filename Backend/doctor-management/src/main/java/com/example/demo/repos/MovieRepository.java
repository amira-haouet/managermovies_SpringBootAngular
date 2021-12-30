package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entities.Movie;


public interface MovieRepository extends JpaRepository<Movie, Long> {

	
	List<Movie> findBySpecialiteNomSc(String nomSc);
}
