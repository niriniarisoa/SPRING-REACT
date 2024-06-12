package app.java.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import app.java.springreact.model.Colocataire;

public interface ColocataireRepository extends JpaRepository<Colocataire, Long>{
    
}
