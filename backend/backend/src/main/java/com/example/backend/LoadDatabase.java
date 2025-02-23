package com.example.backend;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.loader.ast.spi.Loadable;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import aj.org.objectweb.asm.TypeReference;

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
        /*
        JsonNode json;

        try(InputStream inputStream = TypeReference.class.getResourceAsStream("movies.json")) {
            json = objectMapper.readTree(inputStream, JsonNode.class);
        } catch(IOException e) {
            throw new RuntimeException("failed to read JSON data", e);
        }

        List<Movie> movies = new ArrayList<>():
        for (JsonNode node : json.get("movies")) {
            MovieDTO movieDTO = objectMapper.treeToValue(node, MovieDTO.class);
            Movie movie = new Movie(movieDTO);
            movies.add(movie);
        }
        
        movieService.saveAll(movies);
        */

        /*
        JsonNode movies = getMovies(json);
        for (JsonNode j_movie : movies) {
            Movie movie = createMovieFromNode(j_movie);
            this.movieService.saveMovie(movie);
        }
        */


        List<Movie> movies = Arrays.asList(
            new Movie(
                "Inception",
                Arrays.asList("Action", "Sci-Fi", "Thriller"),
                "USA",
                "Warner Bros",
                2010,
                148,
                "PG-13",
                829895144L,
                87.0, 1500, // RT
                8.9, 20000, // LB
                74.0, 300,  // MC
                8.8, 2200000, // IMDB
                8.3, 1000000  // TMDB
            ),
            new Movie(
                "The Dark Knight",
                Arrays.asList("Action", "Crime", "Drama"),
                "USA",
                "Warner Bros",
                2008,
                152,
                "PG-13",
                1004558444L,
                94.0, 1800, // RT
                9.1, 25000, // LB
                84.0, 500,  // MC
                9.0, 2500000, // IMDB
                8.6, 1500000  // TMDB
            ),
            new Movie(
                "Parasite",
                Arrays.asList("Comedy", "Drama", "Thriller"),
                "South Korea",
                "CJ Entertainment",
                2019,
                132,
                "R",
                263358147L,
                98.0, 1900, // RT
                8.6, 18000, // LB
                90.0, 600,  // MC
                8.6, 900000, // IMDB
                8.7, 700000  // TMDB
            ),
            new Movie(
                "Interstellar",
                Arrays.asList("Adventure", "Drama", "Sci-Fi"),
                "USA",
                "Paramount Pictures",
                2014,
                169,
                "PG-13",
                677471339L,
                91.0, 1600, // RT
                8.7, 22000, // LB
                74.0, 350,  // MC
                8.7, 1800000, // IMDB
                8.4, 1200000  // TMDB
            )
        );

        movieService.saveAll(movies);
    }

    private Movie createMovieFromNode(JsonNode j_movie) {
        JsonNode node = j_movie.get("node");

        String title = node.get("title").asText();

        ArrayList<String> genre = new ArrayList<>(Arrays.asList(node.get("genre").asText().split(",")));
        
        String country = node.get("country").asText();
        String studio = node.get("studio").asText();
        Integer year = node.get("releaseYear").asInt();
        int runtime = node.get("runtime").asInt();
        String rating = node.get("rating").asText();
        Long box_office = node.get("box_office").asLong();

        Double RTrating = node.get("RTrating").asDouble();
        int RTnb = node.get("RTnb").asInt();
        Double LBrating = node.get("LBrating").asDouble();
        int LBnb = node.get("LBnb").asInt();
        Double MCrating = node.get("MCrating").asDouble();
        int MCnb = node.get("MCnb").asInt();

        JsonNode j_imdb = node.get("imdbScore");
        Double IMDBrating = j_imdb.get("averageScore").asDouble();
        int IMDBnb = j_imdb.get("numberVotes").asInt();

        Double TMDBrating = node.get("TMDBrating").asDouble();
        int TMDBnb = node.get("TMDBnb").asInt();

        return new Movie(title, genre, country, studio, year, runtime, rating, box_office,
            RTrating, RTnb, LBrating, LBnb, MCrating, MCnb, IMDBrating, IMDBnb, TMDBrating, TMDBnb);
    }

    private JsonNode getMovies(JsonNode json) {
        return Optional.ofNullable(json)
            .map(j -> j.get("data"))
            .orElseThrow(() -> new IllegalArgumentException("Invalid JSON object."));
    }
    
}