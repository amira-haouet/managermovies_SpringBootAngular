package com.example.demo.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Medecin;
import com.example.demo.entities.Specialite;
import com.example.demo.service.MedecinService;

@RestController
@RequestMapping("/medecin/api")
@CrossOrigin
public class MedecinController {
	
	@Autowired
	MedecinService medecinService ;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Medecin> getAllMedecin()
	{
		return medecinService.getAllMedecin();
	}
	@RequestMapping(value="/{id}" , method=RequestMethod.GET)
	public Medecin getMedecinById(@PathVariable("id")Long id)
	{
		return medecinService.getMedecin(id);
	}
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void deleteMedecinById(@PathVariable("id") Long id)
	{
		medecinService.deleteMedecinById(id);
	}
	@RequestMapping(method=RequestMethod.PUT)
	public Medecin updateMedecin(@RequestBody Medecin m)
	{
		return medecinService.updateMedecin(m);
	}
	@RequestMapping(method=RequestMethod.POST)
	public Medecin saveMedecin(@RequestBody Medecin m)
	{
		return medecinService.saveMedecin(m);
	}
	
	@GetMapping("/page")
	public Page<Medecin> showPage(@RequestParam(name = "p", defaultValue="0") int page)
	{
		Page<Medecin> p =  medecinService.getAllmedecinPage(page, 5);
		return p;
	}
	
	@RequestMapping(value="/findSpec/{s}" ,method=RequestMethod.GET)
	public List<Medecin> getBySpecialite(@PathVariable("s") String s)
	{
		System.out.println(s);
		return medecinService.findMedecinBySpecialite(s);
	}
	
	

}
