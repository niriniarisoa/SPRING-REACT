package app.java.springreact.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.java.springreact.model.Tache;
import app.java.springreact.repository.TacheRepository;

import java.util.List;

@RestController
@RequestMapping("/taches")
public class TacheController {
     @Autowired
    private TacheRepository tacheRepository;

    @GetMapping
    public List<Tache> getAllTaches() {
        return tacheRepository.findAll();
    }

    @PostMapping
    public Tache createTache(@RequestBody Tache tache) {
        return tacheRepository.save(tache);
    }

    @GetMapping("/{id}")
    public Tache getTacheById(@PathVariable Long id) {
        return tacheRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Tache updateTache(@PathVariable Long id, @RequestBody Tache updatedTache) {
        return tacheRepository.findById(id).map(tache -> {
            tache.setDescription(updatedTache.getDescription());
            tache.setDate(updatedTache.getDate());
            tache.setFait(updatedTache.getFait());
            return tacheRepository.save(tache);
        }).orElseGet(() -> {
            updatedTache.setId(id);
            return tacheRepository.save(updatedTache);
        });
    }

    @DeleteMapping("/{id}")
    public void deleteTache(@PathVariable Long id) {
        tacheRepository.deleteById(id);
    }
}
