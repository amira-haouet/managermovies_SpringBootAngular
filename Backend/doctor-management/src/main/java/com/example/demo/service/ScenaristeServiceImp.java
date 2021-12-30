package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Scenariste;
import com.example.demo.repos.ScenaristeRepository;


@Service
public class ScenaristeServiceImp implements ScenaristeService {

	@Autowired
	ScenaristeRepository scenaristeRepository;
	@Override
	public Scenariste saveSpecialite(Scenariste s) {
		return scenaristeRepository.save(s);
	}

	@Override
	public Scenariste updateSpecialite(Scenariste s) {
		return scenaristeRepository.save(s);
	}

	@Override
	public void deleteSpecialite(Scenariste s) {
		scenaristeRepository.delete(s);
	}

	@Override
	public void deleteSpecialiteById(Long id) {
		scenaristeRepository.deleteById(id);
		
	}

	@Override
	public Scenariste getSpecialite(Long id) {
		return scenaristeRepository.findById(id).get();
	}

	@Override
	public List<Scenariste> getAllSpecialite() {
		return scenaristeRepository.findAll();
	}
	
	@Override
	public Page<Scenariste> getAllSpecialitePage(int page, int size) {
		return  scenaristeRepository.findAll(PageRequest.of(page, size));
	}

}
