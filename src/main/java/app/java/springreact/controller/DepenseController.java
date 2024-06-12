package app.java.springreact.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.java.springreact.model.Depense;
import app.java.springreact.repository.DepenseRepository;

import java.util.List;

@RestController
@RequestMapping("/depenses")
public class DepenseController {
     @Autowired
    private DepenseRepository depenseRepository;

    @GetMapping
    public List<Depense> getAllDepenses() {
        return depenseRepository.findAll();
    }

    @PostMapping
    public Depense createDepense(@RequestBody Depense depense) {
        return depenseRepository.save(depense);
    }

    @GetMapping("/{id}")
    public Depense getDepenseById(@PathVariable Long id) {
        return depenseRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Depense updateDepense(@PathVariable Long id, @RequestBody Depense updatedDepense) {
        return depenseRepository.findById(id).map(depense -> {
            depense.setType(updatedDepense.getType());
            depense.setMontant(updatedDepense.getMontant());
            depense.setPaye(updatedDepense.getPaye());
            depense.setDate(updatedDepense.getDate());
            return depenseRepository.save(depense);
        }).orElseGet(() -> {
            updatedDepense.setId(id);
            return depenseRepository.save(updatedDepense);
        });
    }

    @DeleteMapping("/{id}")
    public void deleteDepense(@PathVariable Long id) {
        depenseRepository.deleteById(id);
    }
}
