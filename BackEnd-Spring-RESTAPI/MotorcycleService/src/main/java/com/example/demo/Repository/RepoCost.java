package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Model.PojoCost;

import jakarta.transaction.Transactional;

public interface RepoCost extends JpaRepository<PojoCost, String>{

	@Query(value = "select*from cost_table", nativeQuery = true)
	List<PojoCost> viewAllCost();
	
	@Modifying @Transactional
	@Query(value = "Update PojoCost set price = ?2 where pid = ?1")
	int updateCost(String pid, int cost);
	
}
