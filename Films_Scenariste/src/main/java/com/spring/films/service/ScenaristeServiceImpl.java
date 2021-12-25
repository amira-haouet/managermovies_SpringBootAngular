package com.spring.films.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.spring.films.entities.Scenariste;
import com.spring.films.repos.ScenaristeRepository;

@Service
public class ScenaristeServiceImpl implements ScenaristeService {

	@Autowired
	ScenaristeRepository sr;

	@Override
	public Scenariste saveScenariste(Scenariste s) {
		// TODO Auto-generated method stub

		return sr.save(s);

	}

	@Override
	public Scenariste updateScenariste(Scenariste f) {
		// TODO Auto-generated method stub
		return sr.save(f);
	}

	@Override
	public void deleteScenariste(Scenariste f) {
		// TODO Auto-generated method stub
		sr.delete(f);
	}

	@Override
	public void deleteScenaristeById(Long id) {
		// TODO Auto-generated method stub
		sr.deleteById(id);
	}

	@Override
	public Scenariste getScenariste(Long id) {
		// TODO Auto-generated method stub
		return sr.findById(id).get();
	}

	@Override
	public List<Scenariste> getAllScenaristes() {
		// TODO Auto-generated method stub
		return sr.findAll();
	}

	@Override
	public Page<Scenariste> getAllScenaristesParPage(int page, int size) {
		// TODO Auto-generated method stub
		return sr.findAll(PageRequest.of(page, size));
	}

	@Override
	public List<Scenariste> findByTitre(String titre) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Scenariste> listAll(String key) {
		// TODO Auto-generated method stub
		return null;
	}

}
