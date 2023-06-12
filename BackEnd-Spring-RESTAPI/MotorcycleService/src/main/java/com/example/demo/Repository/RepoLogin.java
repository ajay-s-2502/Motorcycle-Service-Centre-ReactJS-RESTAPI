package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.Model.PojoLogin;

import jakarta.transaction.Transactional;

public interface RepoLogin extends JpaRepository<PojoLogin,String> {

	PojoLogin findByuname(String uname);
	
	@Modifying @Transactional
	@Query(value = "Delete from PojoLogin where uname = ?1")
	int delUser(String username);

}
