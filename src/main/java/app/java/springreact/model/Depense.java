package app.java.springreact.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Depense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private Double montant;
    private Boolean paye;
    private Date date;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getMontant() {
        return montant;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public Boolean getPaye() {
        return paye;
    }

    public void setPaye(Boolean paye) {
        this.paye = paye;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Colocataire getColocataire() {
        return colocataire;
    }

    public void setColocataire(Colocataire colocataire) {
        this.colocataire = colocataire;
    }
}