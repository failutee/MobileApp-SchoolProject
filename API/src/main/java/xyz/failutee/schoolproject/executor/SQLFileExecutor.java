package xyz.failutee.schoolproject.executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

@Component
public class SQLFileExecutor
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void createTableFromSqlFile() {
        try {
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("create.sql");

            assert inputStream != null; // xd
            byte[] bytes = inputStream.readAllBytes();

            String sql = new String(bytes, StandardCharsets.UTF_8);

            jdbcTemplate.execute(sql);
        } catch (IOException e) {
            throw new RuntimeException("Cannot read file!", e);
        }
    }
}
