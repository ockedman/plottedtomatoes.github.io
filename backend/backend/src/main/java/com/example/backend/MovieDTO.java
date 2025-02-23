package com.example.backend;

import java.util.List;
import java.util.Map;

public class MovieDTO {
    private String id;
    private String title;
    private int releaseYear;
    private String releaseDate;
    private List<String> genre;
    private List<String> studio;
    private double runtime;
    private Map<String, Integer> rottenTomatoesScore;
    private Map<String, Object> imdbScore;
    private Map<String, Object> letterboxdScore;
    private Map<String, Object> tmdbscore;
    private String country;
    private String rating;
    private Long box_office;
    private Long budget;

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

    public Map<String, Object> getLetterboxdScore() {
        return letterboxdScore;
    }

    public String getCountry() {
        return country;
    }

    public List<String> getStudio() {
        return studio;
    }

    public String getRating() {
        return rating;
    }

    public Long getBoxOffice() {
        return box_office;
    }

    public Long getBudget() {
        return this.budget;
    }

    public void setBudget(Long bg) {
        this.budget = bg;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getReleaseDate() {
        return this.releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
    public void setGenre(List<String> genre) {
        this.genre = genre;
    }
    public void setStudio(List<String> studio) {
        this.studio = studio;
    }
    public void setRuntime(double runtime) {
        this.runtime = runtime;
    }
    public void setRottenTomatoesScore(Map<String,Integer> rottenTomatoesScore) {
        this.rottenTomatoesScore = rottenTomatoesScore;
    }
    public void setImdbScore(Map<String,Object> imdbScore) {
        this.imdbScore = imdbScore;
    }
    public void setLetterboxdScore(Map<String,Object> letterboxdScore) {
        this.letterboxdScore = letterboxdScore;
    }

    public Map<String,Object> getTmdbScore() {
        return this.tmdbscore;
    }

    public void setTmdbscore(Map<String,Object> tmdbscore) {
        this.tmdbscore = tmdbscore;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }

    public Long getBox_office() {
        return this.box_office;
    }

    public void setBox_office(Long box_office) {
        this.box_office = box_office;
    }


}
