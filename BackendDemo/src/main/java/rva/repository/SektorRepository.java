package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Sektor;

public interface SektorRepository extends JpaRepository<Sektor,Integer> {

	Collection<Sektor> findByNazivContainingIgnoreCase(String naziv);
}
