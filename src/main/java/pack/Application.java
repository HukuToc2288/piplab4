package pack;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import repository.DataRowRepository;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {"repository","pack","beans"})
@EntityScan(basePackages = {"repository","pack","beans"})
@EnableJpaRepositories(basePackages = {"repository","pack","beans"})
@EnableJpaAuditing
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}