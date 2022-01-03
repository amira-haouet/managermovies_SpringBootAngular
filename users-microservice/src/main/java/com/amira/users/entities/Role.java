package com.amira.users.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data @NoArgsConstructor @AllArgsConstructor
@Entity
public class Role {
@Id
@GeneratedValue (strategy=GenerationType.IDENTITY)
private Long role_id;
private String role;
/*public Role(Object object, String string) {
	// TODO Auto-generated constructor stub
}*/
public Long getRole_id() {
	return role_id;
}
public void setRole_id(Long role_id) {
	this.role_id = role_id;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}


}