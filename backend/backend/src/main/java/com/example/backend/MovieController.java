package com.example.backend;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
// import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.hateoas.CollectionModel;
// import org.springframework.hateoas.EntityModel;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.servlet.function.EntityResponse;

// import org.springframework.hateoas.EntityModel;
// import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "http://localhost:5173")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/search")
    public ResponseEntity<List<Movie>> searchMovies(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String year,
        @RequestParam(required = false) String rating,
        @RequestParam(required = false) String min_year,
        @RequestParam(required = false) String max_year
    ) {
        List<Movie> movies = this.movieService.getMovies(genre, country, studio, year, rating, min_year, max_year);
        if (movies == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(Collections.emptyList());
        }
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/average")
    public ResponseEntity<Double> searchAverage(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String year,
        @RequestParam(required = false) String rating,
        @RequestParam(required = false) String min_year,
        @RequestParam(required = false) String max_year,
        @RequestParam(required = true) String platform
    ) {

        if (!platformExists(platform)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(this.movieService.getAverage(genre, country, studio, year, rating, min_year, max_year, platform));
    }

    @GetMapping("/average_across")
    public ResponseEntity<HashMap<Integer, Double>> searchAverageAcrossYears(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String rating,
        @RequestParam(required = true) String min_year,
        @RequestParam(required = true) String max_year,
        @RequestParam(required = true) String platform) {

        if (!platformExists(platform)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(this.movieService.getAverageAcrossYears(genre, country, studio, rating, min_year, max_year, platform));
    }

    @GetMapping("/allaverages")
    public ResponseEntity<HashMap<String, Double>> searchAllAverages(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String year,
        @RequestParam(required = false) String rating,
        @RequestParam(required = false) String min_year,
        @RequestParam(required = false) String max_year
    ) {
        HashMap<String, Double> movies = this.movieService.getAllAverages(genre, country, studio, year, rating, min_year, max_year);
        if (movies == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new HashMap<String, Double>());
        }
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/allaverages_across")
    public ResponseEntity<HashMap<Integer, HashMap<String, Double>>> searchAllAverages(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String rating,
        @RequestParam(required = true) String min_year,
        @RequestParam(required = true) String max_year
    ) {
        HashMap<Integer, HashMap<String, Double>> movies = this.movieService.getAllAveragesAcrossYears(genre, country, studio, rating, min_year, max_year);
        if (movies == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(null);
        }
        return ResponseEntity.ok(movies);
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> searchNumberOfReviews(
        @RequestParam(required = false) String genre,
        @RequestParam(required = false) String country,
        @RequestParam(required = false) String studio,
        @RequestParam(required = false) String year,
        @RequestParam(required = false) String rating,
        @RequestParam(required = false) String min_year,
        @RequestParam(required = false) String max_year,
        @RequestParam(required = true) String platform
    ) {
        if (!platformExists(platform)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(this.movieService.getNumberOfReviews(genre, country, studio, year, rating, min_year, max_year, platform));
    }


    @GetMapping("/movie")
    public ResponseEntity<Movie> searchMovieByName(@RequestParam String title) {
        Movie movie = this.movieService.getMovieByTitle(title);
        if (movie == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(movie);
    }

    @GetMapping("/best")
    public ResponseEntity<List<Movie>> searchBestMovies(@RequestParam int n) {
        if (n <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(Collections.emptyList());
        }
        return ResponseEntity.ok(this.movieService.getBestMovies(n));
    }


    public boolean platformExists(String platform) {
        String[] platforms = {"RT", "MC", "LB", "IMDB", "TMDB"};
        return Arrays.asList(platforms).contains(platform);
    }

}
