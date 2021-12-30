package com.example.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;

public interface ScenaristeService {
	Scenariste saveSpecialite(Scenariste s);
	Scenariste updateSpecialite(Scenariste s);
	void deleteSpecialite(Scenariste s);
	void deleteSpecialiteById(Long id);
	Scenariste getSpecialite(Long id);
	List<Scenariste> getAllSpecialite();
	
	Page<Scenariste>  getAllSpecialitePage(int page , int size);
}
