package com.example.backend;

import java.util.List;
import java.util.Map;

public class MovieDTO {
    private String id;
    private String title;
    private int releaseYear;
    private String releaseDate;
    private List<String> genre;
    private double runtime;
    private Map<String, Integer> rottenTomatoesScore;
    private Map<String, Object> imdbScore;
    private String country;
    private String studio;
    private String rating;
    private Long box_office;

    public String getTitle() {
        return title;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public List<String> getGenre() {
        return genre;
    }

    public double getRuntime() {
        return runtime;
    }

    public Map<String, Integer> getRottenTomatoesScore() {
        return rottenTomatoesScore;
    }

    public Map<String, Object> getImdbScore() {
        return imdbScore;
    }

    public String getCountry() {
        return country;
    }

    public String getStudio() {
        return studio;
    }

    public String getRating() {
        return rating;
    }

    public Long getBoxOffice() {
        return box_office;
    }
}
