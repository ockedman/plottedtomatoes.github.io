package com.example.backend;

import java.io.IOException;
import java.io.InputStream;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
import java.util.ArrayList;
// import java.util.Arrays;
import java.util.List;
// import java.util.Optional;

// import org.hibernate.loader.ast.spi.Loadable;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

// import aj.org.objectweb.asm.TypeReference;
// import jakarta.persistence.criteria.Path;

@Configuration
public class LoadDatabase implements CommandLineRunner {

    private final MovieService movieService;
    private final ObjectMapper objectMapper;


    public MovieService getMovieService() {
        return this.movieService;
    }

    public ObjectMapper getObjectMapper() {
        return this.objectMapper;
    }


    public LoadDatabase(MovieService movieService, ObjectMapper objectMapper) {
        this.movieService = movieService;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        
        JsonNode json;

        // try(InputStream inputStream = TypeReference.class.getResourceAsStream("data.json")) {
        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream("data.json")) {
            if (inputStream == null) {
                throw new IllegalArgumentException("File not found: your-file.json");
            }
            json = objectMapper.readValue(inputStream, JsonNode.class);
        } catch(IOException e) {
            throw new RuntimeException("failed to read JSON data", e);
        }

        List<Movie> movies = new ArrayList<>();
        for (JsonNode node : json.get("data")) {
            MovieDTO movieDTO = objectMapper.treeToValue(node, MovieDTO.class);
            Movie movie = new Movie(movieDTO);
            movies.add(movie);
        }
        
        movieService.saveAll(movies);
    }
}