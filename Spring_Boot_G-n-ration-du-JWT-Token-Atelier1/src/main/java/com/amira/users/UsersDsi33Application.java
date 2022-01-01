package com.amira.users;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.amira.users.entities.Role;
import com.amira.users.entities.User;
import com.amira.users.repos.UserRepository;

@SpringBootApplication
public class UsersDsi33Application {

	/*@Bean
	BCryptPasswordEncoder getBCE() {
		return new BCryptPasswordEncoder();
	}*/
	@Autowired
	UserRepository userRerp;
	public static void main(String[] args) {
		SpringApplication.run(UsersDsi33Application.class, args);
	}

/*	@PostConstruct
	void init_users() {
		// ajouter les rôles
		userService.addRole(new Role(null, "ADMIN"));
		userService.addRole(new Role(null, "USER"));
		// ajouter les users
		userService.saveUser(new User(null, "aaa", "123", true, null));
		userService.saveUser(new User(null, "amaaira", "123", true, null));
		userService.saveUser(new User(null, "xxaxx", "123", true, null));
		// ajouter les rôles aux users
		//userService.addRoleToUser("admin", "ADMIN");
		userService.addRoleToUser("amaaira", "USER");
		userService.addRoleToUser("aaa", "USER");
		userService.addRoleToUser("xxaxx", "USER");
	}
	/*}
	*/
}
