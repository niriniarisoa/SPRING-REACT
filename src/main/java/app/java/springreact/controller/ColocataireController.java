package app.java.springreact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.java.springreact.model.Colocataire;
import app.java.springreact.repository.ColocataireRepository;

import java.util.List;

@RestController
@RequestMapping("/api/colocataires")
public class ColocataireController {
      @Autowired
    private ColocataireRepository colocataireRepository;

    @GetMapping
    public List<Colocataire> getAllColocataires() {
        return colocataireRepository.findAll();
    }

    @PostMapping
    public Colocataire createColocataire(@RequestBody Colocataire colocataire) {
        return colocataireRepository.save(colocataire);
    }

    @GetMapping("/{id}")
    public Colocataire getColocataireById(@PathVariable Long id) {
        return colocataireRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Colocataire updateColocataire(@PathVariable Long id, @RequestBody Colocataire updatedColocataire) {
        return colocataireRepository.findById(id).map(colocataire -> {
            colocataire.setNom(updatedColocataire.getNom());
            colocataire.setPrenom(updatedColocataire.getPrenom());
            colocataire.setEmail(updatedColocataire.getEmail());
            colocataire.setMotDePasse(updatedColocataire.getMotDePasse());
            colocataire.setDateDeNaissance(updatedColocataire.getDateDeNaissance());
            colocataire.setTelephone(updatedColocataire.getTelephone());
            return colocataireRepository.save(colocataire);
        }).orElseGet(() -> {
            updatedColocataire.setId(id);
            return colocataireRepository.save(updatedColocataire);
        });
    }

    @DeleteMapping("/{id}")
    public void deleteColocataire(@PathVariable Long id) {
        colocataireRepository.deleteById(id);
    }
}
