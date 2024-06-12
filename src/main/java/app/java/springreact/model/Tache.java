package app.java.springreact.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Tache {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Date date;
    private Boolean fait;

    @ManyToOne
    @JoinColumn(name = "colocataire_id")
    private Colocataire colocataire;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Boolean getFait() {
        return fait;
    }

    public void setFait(Boolean fait) {
        this.fait = fait;
    }

    public Colocataire getColocataire() {
        return colocataire;
    }

    public void setColocataire(Colocataire colocataire) {
        this.colocataire = colocataire;
    }
}