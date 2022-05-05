package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;


import rva.jpa.Radnik;
import rva.jpa.Sektor;


public interface RadnikRepository extends JpaRepository<Radnik,Integer>{
	

	Collection<Radnik> findBySektor(Sektor a);
}
