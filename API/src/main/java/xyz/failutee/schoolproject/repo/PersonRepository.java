package xyz.failutee.schoolproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import xyz.failutee.schoolproject.entity.PersonEntity;

import java.util.List;

@Repository
@Component
public interface PersonRepository extends JpaRepository<PersonEntity, Integer>
{
    @Override
    List<PersonEntity> findAll();
}
