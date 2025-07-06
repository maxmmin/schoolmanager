package io.github.maxmmin.brdo.schoolmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class AppConfig {
    @Bean
    public CorsConfiguration corsConfiguration () {
        CorsConfiguration cfg = new CorsConfiguration();
        cfg.setAllowedOriginPatterns(List.of("*"));
        return cfg;
    }
}
