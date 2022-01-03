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
import com.example.demo.service.SpecialiteService;

@RestController
@RequestMapping("/specialite/api")
@CrossOrigin
public class SpecialiteController {

	
	@Autowired
	SpecialiteService specialiteService ;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Specialite> getAllSpecialite()
	{
		return specialiteService.getAllSpecialite();
	}
	@RequestMapping(value="/{id}" , method=RequestMethod.GET)
	public Specialite getSpecialiteById(@PathVariable("id")Long id)
	{
		return specialiteService.getSpecialite(id);
	}
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void deleteSpecialiteById(@PathVariable("id") Long id)
	{
		specialiteService.deleteSpecialiteById(id);
	}
	@RequestMapping(method=RequestMethod.PUT)
	public Specialite updateSpecialite(@RequestBody Specialite s)
	{
		return specialiteService.updateSpecialite(s);
	}
	@RequestMapping(method=RequestMethod.POST)
	public Specialite saveSpecialite(@RequestBody Specialite s)
	{
		return specialiteService.saveSpecialite(s);
	}
	
	@GetMapping("/page")
	public Page<Specialite> showPage(@RequestParam(name = "p", defaultValue="0") int page)
	{
		Page<Specialite> p =  specialiteService.getAllSpecialitePage(page, 5);
		return p;
	}
}
