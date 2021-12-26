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

		return sr.save(s);

	}

	@Override
	public Scenariste updateScenariste(Scenariste s) {
		return sr.save(s);
	}

	@Override
	public void deleteScenariste(Scenariste s) {
		sr.delete(s);
	}

	@Override
	public void deleteScenaristeById(Long id) {
		sr.deleteById(id);
	}

	@Override
	public Scenariste getScenariste(Long id) {
		return sr.findById(id).get();
	}

	@Override
	public List<Scenariste> getAllScenaristes() {
		return sr.findAll();
	}

	/*
	 * @Override public Page<Scenariste> getAllScenaristesParPage(int page, int
	 * size) { // TODO Auto-generated method stub return
	 * sr.findAll(PageRequest.of(page, size)); }
	 * 
	 * @Override public List<Scenariste> findByNom(String nom) { // TODO
	 * Auto-generated method stub return null; }
	 * 
	 * @Override public List<Scenariste> listAll(String key) { // TODO
	 * Auto-generated method stub return null; }
	 */

}
