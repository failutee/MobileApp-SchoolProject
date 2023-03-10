package xyz.failutee.schoolproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.failutee.schoolproject.entity.PersonEntity;
import xyz.failutee.schoolproject.repo.PersonRepository;

import java.util.List;

@RestController
@Component
@RequestMapping("/api/v1/person")
public class DataController
{
    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/getAllPersons")
    public List<PersonEntity> getAllPersons() {
        return personRepository.findAll();
    }
}
