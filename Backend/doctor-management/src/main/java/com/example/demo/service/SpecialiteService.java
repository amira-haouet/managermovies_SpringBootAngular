package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.entities.Medecin;
import com.example.demo.entities.Specialite;

public interface SpecialiteService {
	Specialite saveSpecialite(Specialite s);
	Specialite updateSpecialite(Specialite s);
	void deleteSpecialite(Specialite s);
	void deleteSpecialiteById(Long id);
	Specialite getSpecialite(Long id);
	List<Specialite> getAllSpecialite();
	
	Page<Specialite>  getAllSpecialitePage(int page , int size);
}
