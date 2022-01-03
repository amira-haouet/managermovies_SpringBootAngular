package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Medecin;
import com.example.demo.entities.Specialite;
import com.example.demo.repos.SpecialiteRepository;
@Service
public class SpecialiteServiceImp implements SpecialiteService {

	@Autowired
	SpecialiteRepository specialiteRepository;
	@Override
	public Specialite saveSpecialite(Specialite s) {
		return specialiteRepository.save(s);
	}

	@Override
	public Specialite updateSpecialite(Specialite s) {
		return specialiteRepository.save(s);
	}

	@Override
	public void deleteSpecialite(Specialite s) {
		specialiteRepository.delete(s);
	}

	@Override
	public void deleteSpecialiteById(Long id) {
		specialiteRepository.deleteById(id);
		
	}

	@Override
	public Specialite getSpecialite(Long id) {
		return specialiteRepository.findById(id).get();
	}

	@Override
	public List<Specialite> getAllSpecialite() {
		return specialiteRepository.findAll();
	}
	
	@Override
	public Page<Specialite> getAllSpecialitePage(int page, int size) {
		return  specialiteRepository.findAll(PageRequest.of(page, size));
	}

}
