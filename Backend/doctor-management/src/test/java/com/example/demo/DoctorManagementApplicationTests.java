package com.example.demo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Medecin;
import com.example.demo.entities.Specialite;
import com.example.demo.repos.MedecinRepository;
import com.example.demo.repos.SpecialiteRepository;

@SpringBootTest
class DoctorManagementApplicationTests {

	@Autowired
	private MedecinRepository medecinRepository;
	@Autowired
	private SpecialiteRepository specialiteRepository;

	@Test
	void contextLoads() {
	}

	// @Test
	/*
	 * void testAddMedecin() { Medecin m = new Medecin("nom2", "prenom2", new
	 * Date()); medecinRepository.save(m); }
	 */

	@Test
	void testFindMedecin() {
		Medecin m = medecinRepository.findById(1L).get();
		System.out.println(m);

	}

	@Test
	void testFindAllMedecin() {
		ArrayList<Medecin> m = new ArrayList<>(medecinRepository.findAll());
		for (Medecin medecin : m) {
			System.out.println(medecin);
		}
	}

	@Test
	void updateMedecin() {
		Medecin m = medecinRepository.findById(1L).get();
		m.setNomMedecin("Jacque");
		medecinRepository.save(m);
	}

	@Test
	void deleteMedecin() {
		Medecin m = medecinRepository.findById(1L).get();
		medecinRepository.delete(m);
	}

	@Test
	public void findByCategorieNomSpec() {
		List<Medecin> med = medecinRepository.findBySpecialiteNomSpec("ds");
		for (Medecin m : med) {
			System.out.println(m);
		}
	}

}
