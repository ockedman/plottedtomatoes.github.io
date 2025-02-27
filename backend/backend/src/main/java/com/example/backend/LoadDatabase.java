package com.example.backend;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


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