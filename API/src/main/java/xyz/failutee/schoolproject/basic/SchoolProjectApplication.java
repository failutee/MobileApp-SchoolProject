package xyz.failutee.schoolproject.basic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import xyz.failutee.schoolproject.executor.SQLFileExecutor;

@SpringBootApplication
@ComponentScan("xyz.failutee.schoolproject")
@EntityScan("xyz.failutee.schoolproject.entity")
public class SchoolProjectApplication implements CommandLineRunner
{
    @Autowired private SQLFileExecutor sqlFileExecutor;

    public static void main(String[] args) {
        SpringApplication.run(SchoolProjectApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        sqlFileExecutor.createTableFromSqlFile();
    }
}
