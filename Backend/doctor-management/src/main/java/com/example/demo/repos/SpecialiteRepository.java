package com.example.demo.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Specialite;

public interface SpecialiteRepository extends JpaRepository<Specialite, Long> {

	List<Specialite> findByNomSpec(String nom);
}
