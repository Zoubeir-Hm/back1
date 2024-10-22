package org.example.springdatarest;

import static org.assertj.core.api.Assertions.assertThat;

import org.example.springdatarest.modele.Proprietaire;
import org.example.springdatarest.modele.Voiture;
import org.example.springdatarest.repository.VoitureRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
@RunWith(SpringRunner.class)
@DataJpaTest
//Si le test concerne uniquement les composantes JPA
//Lorsque cette annotation est utilisée, H2, Hibernate et Spring Data sont configurés
//automatiquement pour le test.
public class VoitureRepoTest {
    @Autowired
    private TestEntityManager entityManager;
    //TestEntityManager est utilisée pour manipuler les entités persistantes
    @Autowired
    VoitureRepo voitureRepo;
    Proprietaire proprietaire1 = new Proprietaire("Ali" , "Hassan");
    @Test
    public void ajouterVoiture() {
        Voiture voiture = new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021, 180000,proprietaire1);
        entityManager.persistAndFlush(voiture);
//permet de faire persister ce tuple de l’entité Voiture
        assertThat(voiture.getId()).isNotNull();
//permet de tester qu'un tuple de Voiture a bien été ajoutée en mémoire H2
    }
    @Test
    public void supprimerVoiture() {
        entityManager.persistAndFlush(new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021, 180000,proprietaire1));
        entityManager.persistAndFlush(new Voiture ("MiniCooper","Uber","Rouge","C-2020", 2021, 180000,proprietaire1));
        voitureRepo.deleteAll();
        assertThat(voitureRepo.findAll()).isEmpty();
//permet de tester si tous les tuples ont été supprimés
    }
}