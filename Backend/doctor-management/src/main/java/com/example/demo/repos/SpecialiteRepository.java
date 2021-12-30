package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Scenariste;

public interface SpecialiteRepository extends JpaRepository<Scenariste, Long> {

	List<Scenariste> findByNomSpec(String nom);
}
