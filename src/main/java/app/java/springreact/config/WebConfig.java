package app.java.springreact.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**")
               .allowedOrigins("http://localhost:3000") // Autorise les requêtes provenant de localhost:3000
               .allowedMethods("*"); // Autorise toutes les méthodes HTTP
    }
}
