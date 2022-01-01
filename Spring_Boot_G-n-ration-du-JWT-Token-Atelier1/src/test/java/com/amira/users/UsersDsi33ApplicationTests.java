package com.amira.users;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.amira.users.entities.User;
import com.amira.users.repos.UserRepository;

@SpringBootTest
class UsersDsi33ApplicationTests {

	@Autowired
	UserRepository userRep;

	@Test
	void contextLoads() {
	}

	@Test
	void testUsername() {
		User u = userRep.findByUsername("amira");
		System.out.print(u);
	}
}
