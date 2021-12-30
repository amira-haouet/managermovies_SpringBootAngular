package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;
import com.example.demo.repos.SpecialiteRepository;
@Service
public class ScenaristeServiceImp implements ScenaristeService {

	@Autowired
	SpecialiteRepository specialiteRepository;
	@Override
	public Scenariste saveSpecialite(Scenariste s) {
		return specialiteRepository.save(s);
	}

	@Override
	public Scenariste updateSpecialite(Scenariste s) {
		return specialiteRepository.save(s);
	}

	@Override
	public void deleteSpecialite(Scenariste s) {
		specialiteRepository.delete(s);
	}

	@Override
	public void deleteSpecialiteById(Long id) {
		specialiteRepository.deleteById(id);
		
	}

	@Override
	public Scenariste getSpecialite(Long id) {
		return specialiteRepository.findById(id).get();
	}

	@Override
	public List<Scenariste> getAllSpecialite() {
		return specialiteRepository.findAll();
	}
	
	@Override
	public Page<Scenariste> getAllSpecialitePage(int page, int size) {
		return  specialiteRepository.findAll(PageRequest.of(page, size));
	}

}
