package org.example.springdatarest.web;

import org.example.springdatarest.modele.Voiture;
import org.example.springdatarest.repository.VoitureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class VoitureController {

    @Autowired
    private VoitureRepo voitureRepo;

    @RequestMapping(value = "/voitures" )
    public Iterable<Voiture> getVoitures() {
        return voitureRepo.findAll();
    }

}