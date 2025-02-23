package com.example.backend;

import org.springframework.data.jpa.domain.Specification;
// import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;
import java.util.List;
// import java.util.stream.Collectors;
import java.util.HashSet;
import java.util.Set;
// import java.util.function.Function;
import java.util.ArrayList;
import java.util.HashMap;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }


    public MovieRepository getMovieRepository() {
        return this.movieRepository;
    }


    // returns Array of movies with selection criteria
    public List<Movie> getMovies(String genre, String country, String studio, String year, String rating, String min_year, String max_year) {
        Specification<Movie> spec = MovieSpecification.filterMovies(genre, country, studio, year, rating, min_year, max_year);
        List<Movie> selection = movieRepository.findAll(spec);
        return selection;
    }


    // returns the average of grades for a selection of movies, depending on a platform
    public Double getAverage(String genre, String country, String studio, String year, String rating, String min_year, String max_year, String platform) {
        Specification<Movie> spec = MovieSpecification.filterMovies(genre, country, studio, year, rating, min_year, max_year);
        List<Movie> selection = movieRepository.findAll(spec);
        System.out.println("we have our movies");

        if (selection.isEmpty()) {
            return 0.0;
        }

        Double[] s = {0.0};
        selection.forEach(movie -> {
            Double t;
            switch(platform) {
                case "RT":
                    t = movie.getRTrating();
                    break;
                case "LB":
                    t = movie.getLBrating();
                    break;
                case "MC":
                    t = movie.getMCrating();
                    break;
                case "IMDB":
                    t = movie.getIMDBrating();
                    break;
                default:
                    t = movie.getTMDBrating();
            }
            s[0] += t;
        });

        return s[0] / selection.size();
    }

    // returns the average of grades for a selection of movies, for every platform
    public HashMap<String, Double> getAllAverages(String genre, String country, String studio, String year, String rating, String min_year, String max_year) {
        Specification<Movie> spec = MovieSpecification.filterMovies(genre, country, studio, year, rating, min_year, max_year);
        List<Movie> selection = movieRepository.findAll(spec);

        HashMap<String, Double> s = new HashMap<>();
        s.put("RT", 0.0);
        s.put("LB", 0.0);
        s.put("MC", 0.0);
        s.put("IMDB", 0.0);
        s.put("TMDB", 0.0);

        if (selection.isEmpty()) {
            return s;
        }

        selection.forEach(movie -> {
            s.put("RT", s.get("RT") + movie.getRTrating());
            s.put("LB", s.get("LB") + movie.getLBrating());
            s.put("MC", s.get("MC") + movie.getMCrating());
            s.put("IMDB", s.get("IMDB") + movie.getIMDBrating());
            s.put("TMDB", s.get("TMDB") + movie.getTMDBrating());
        });

        int len = selection.size();
        s.forEach((k, v) -> s.put(k, s.get(k)/len));

        return s;
    }

    // returns the number of reviews for a whole selection of movies
    public Integer getNumberOfReviews(String genre, String country, String studio, String year, String rating, String min_year, String max_year, String platform) {
        Specification<Movie> spec = MovieSpecification.filterMovies(genre, country, studio, year, rating, min_year, max_year);
        List<Movie> selection = movieRepository.findAll(spec);
        System.out.println("we have our movies");

        int[] s = {0};
        selection.forEach(movie -> {
            int t;
            switch(platform) {
                case "RT":
                    t = movie.getRTnb();
                    break;
                case "LB":
                    t = movie.getLBnb();
                    System.out.println("we added" + t + "movies");
                    break;
                case "MC":
                    t = movie.getMCnb();
                    break;
                case "IMDB":
                    t = movie.getIMDBnb();
                    break;
                default:
                    t = movie.getTMDBnb();
            }
            s[0] += t;
        });

        return s[0];
    }


    // returns a movie by its name
    public Movie getMovieByTitle(String title) {
        return this.movieRepository.findByTitle(title);
    }


    // returns Array of n best movies per platform, mixed together
    public List<Movie> getBestMovies(int n) {
        Set<Movie> bestMovies = new HashSet<>();
        bestMovies.addAll(this.movieRepository.findAllByOrderByRTratingDesc().subList(0, n));
        bestMovies.addAll(this.movieRepository.findAllByOrderByLBratingDesc().subList(0, n));
        // bestMovies.addAll(this.movieRepository.findAllByOrderByMCratingDesc().subList(0, n));
        bestMovies.addAll(this.movieRepository.findAllByOrderByIMDBratingDesc().subList(0, n));
        bestMovies.addAll(this.movieRepository.findAllByOrderByTMDBratingDesc().subList(0, n));

        return new ArrayList<>(bestMovies);
    }

    public void saveMovie(Movie movie) {
        this.movieRepository.save(movie);
    }

    public void saveAll(List<Movie> movies) {
        this.movieRepository.saveAll(movies);
    }
}
