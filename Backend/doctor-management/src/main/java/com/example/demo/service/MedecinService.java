package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.entities.Medecin;
import com.example.demo.entities.Specialite;

public interface MedecinService {
	
	Medecin saveMedecin(Medecin m);
	Medecin updateMedecin(Medecin m);
	void deleteMedecin(Medecin m);
	void deleteMedecinById(Long id);
	Medecin getMedecin(Long id);
	List<Medecin> getAllMedecin();
	
	Page<Medecin>  getAllmedecinPage(int page , int size);
	
	List<Medecin> findMedecinBySpecialite(String s);
}
