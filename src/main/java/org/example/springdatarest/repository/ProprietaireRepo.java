package org.example.springdatarest.repository;

import org.example.springdatarest.modele.Proprietaire;
import org.springframework.data.repository.CrudRepository;

public interface ProprietaireRepo extends CrudRepository<Proprietaire, Long> {
}
