package app.java.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.java.springreact.model.Tache;

public interface TacheRepository extends JpaRepository<Tache, Long>{
    
}
