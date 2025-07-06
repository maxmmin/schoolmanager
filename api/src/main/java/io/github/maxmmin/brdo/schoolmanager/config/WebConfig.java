package io.github.maxmmin.brdo.schoolmanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods(Arrays.stream(HttpMethod.values()).map(HttpMethod::name).toArray(String[]::new))
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}