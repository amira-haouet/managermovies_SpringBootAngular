package com.spring.films.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;

import com.spring.films.entities.Scenariste;

public interface ScenaristeService {

	Scenariste saveScenariste(Scenariste f);

	Scenariste updateScenariste(Scenariste f);

	void deleteScenariste(Scenariste f);

	void deleteScenaristeById(Long id);

	Scenariste getScenariste(Long id);

	List<Scenariste> getAllScenaristes();

	/*
	 * @Query("select f from Scenariste f where f.titre = ?1") /*Page<Scenariste>
	 * getAllScenaristesParPageandbytitre(int page, int size, String titre);
	 * Page<Scenariste> listAllbyPage(String key, int page, int size);
	 */
	Page<Scenariste> getAllScenaristesParPage(int page, int size);

	@Query("select s from Scenariste s where s.nom = ?1")
	List<Scenariste> findByTitre(String titre);

	List<Scenariste> listAll(String key);
}
