package app.java.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.java.springreact.model.Depense;

public interface DepenseRepository extends JpaRepository<Depense, Long>{
    
}
