package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Model.Pojo;

public interface Repo extends JpaRepository<Pojo, Integer>
{

	Pojo findByregnum(String regnum);

	@Query("select p from Pojo p where p.regnum=:regnum")
	Optional<Pojo> findByRegNum(String regnum);
	
	
}