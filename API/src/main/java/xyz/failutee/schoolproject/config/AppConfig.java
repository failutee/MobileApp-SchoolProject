package xyz.failutee.schoolproject.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import xyz.failutee.schoolproject.executor.SQLFileExecutor;

@Configuration
@EnableJpaRepositories(basePackages = "xyz.failutee.schoolproject.repo")
public class AppConfig
{
    @Bean
    public SQLFileExecutor sqlFileExecutor() {
        return new SQLFileExecutor();
    }
}