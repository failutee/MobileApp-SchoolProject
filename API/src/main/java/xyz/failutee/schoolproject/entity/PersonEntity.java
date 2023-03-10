package xyz.failutee.schoolproject.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Date;

@Entity(name = "data") @Getter
public class PersonEntity
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "person_id") private int personID;

    @Column(name = "person_name") private String personName;

    @Column(name = "birth_date") private Date birthDate;

    @Column(name = "car") private String car;
}
