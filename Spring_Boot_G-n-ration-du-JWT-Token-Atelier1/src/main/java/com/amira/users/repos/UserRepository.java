package com.amira.users.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amira.users.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);

}