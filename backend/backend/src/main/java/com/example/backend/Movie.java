package com.example.backend;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ElementCollection
    private List<String> genre;

    private String country;
    private String studio;
    private Integer releaseYear;
    private int runtime;
    private String rating;
    private Long box_office;

    private Double RTrating;
    private int RTnb;
    private Double LBrating;
    private int LBnb;
    private Double MCrating;
    private int MCnb;
    private Double IMDBrating;
    private int IMDBnb;
    private Double TMDBrating;
    private int TMDBnb;

    public Movie() {

    };

    public Movie(String title, List<String> genre, String country, String studio, Integer year, int runtime, String rating,
        Long box_office, Double RTrating, int RTnb, Double LBrating, int LBnb, Double MCrating, int MCnb, Double IMDBrating, int IMDBnb,
        Double TMDBrating, int TMDBnb) {

        this.title = title;
        this.genre = genre;
        this.country = country;
        this.studio = studio;
        this.releaseYear = year;
        this.runtime = runtime;
        this.rating = rating;
        this.box_office = box_office;

        this.RTrating = RTrating;
        this.RTnb = RTnb;
        this.LBrating = LBrating;
        this.LBnb = LBnb;
        this.MCrating = MCrating;
        this.MCnb = MCnb;
        this.IMDBrating = IMDBrating;
        this.IMDBnb = IMDBnb;
        this.TMDBrating = TMDBrating;
        this.TMDBnb = TMDBnb;
    }

    public Movie(MovieDTO dto) {
        this.title = dto.getTitle();
        this.genre = dto.getGenre();
        this.releaseYear = dto.getReleaseYear();
        this.runtime = (int) dto.getRuntime();
        this.country = dto.getCountry();
        this.studio = dto.getStudio();
        this.rating = dto.getRating();
        this.box_office = dto.getBoxOffice();
    
        this.RTrating = dto.getRottenTomatoesScore() != null ? 
                        dto.getRottenTomatoesScore().getOrDefault("audienceScore", 0).doubleValue() : 0.0;
        this.RTnb = 0; // Pas de données pour le nombre de votes sur RT
    
        if (dto.getImdbScore() != null) {
            this.IMDBrating = dto.getImdbScore().get("averageScore") != null ?
                    ((Number) dto.getImdbScore().get("averageScore")).doubleValue() : 0.0;
            this.IMDBnb = dto.getImdbScore().get("numberVotes") != null ?
                    ((Number) dto.getImdbScore().get("numberVotes")).intValue() : 0;
        } else {
            this.IMDBrating = 0.0;
            this.IMDBnb = 0;
        }
    
        this.LBrating = null;
        this.LBnb = 0;
        this.MCrating = null;
        this.MCnb = 0;
        this.TMDBrating = null;
        this.TMDBnb = 0;
    }
    


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setGenre(ArrayList<String> genre) {
        this.genre = genre;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public void setStudio(String studio) {
        this.studio = studio;
    }
    public void setYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getTitle() {
        return this.title;
    }

    public int getRuntime() {
        return this.runtime;
    }

    public void setRuntime(int runtime) {
        this.runtime = runtime;
    }

    public String getRating() {
        return this.rating;
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

    public Double getRTrating() {
        return this.RTrating;
    }

    public void setRTrating(Double RTrating) {
        this.RTrating = RTrating;
    }

    public int getRTnb() {
        return this.RTnb;
    }

    public void setRTnb(int RTnb) {
        this.RTnb = RTnb;
    }

    public Double getLBrating() {
        return this.LBrating;
    }

    public void setLBrating(Double LBrating) {
        this.LBrating = LBrating;
    }

    public int getLBnb() {
        return this.LBnb;
    }

    public void setLBnb(int LBnb) {
        this.LBnb = LBnb;
    }

    public Double getMCrating() {
        return this.MCrating;
    }

    public void setMCrating(Double MCrating) {
        this.MCrating = MCrating;
    }

    public int getMCnb() {
        return this.MCnb;
    }

    public void setMCnb(int MCnb) {
        this.MCnb = MCnb;
    }

    public Double getIMDBrating() {
        return this.IMDBrating;
    }

    public void setIMDBrating(Double IMDBrating) {
        this.IMDBrating = IMDBrating;
    }

    public int getIMDBnb() {
        return this.IMDBnb;
    }

    public void setIMDBnb(int IMDBnb) {
        this.IMDBnb = IMDBnb;
    }

    public Double getTMDBrating() {
        return this.TMDBrating;
    }

    public void setTMDBrating(Double TMDBrating) {
        this.TMDBrating = TMDBrating;
    }

    public int getTMDBnb() {
        return this.TMDBnb;
    }

    public void setTMDBnb(int TMDBnb) {
        this.TMDBnb = TMDBnb;
    }

    public List<String> getGenre() {
        return this.genre;
    }


    public String getCountry() {
        return this.country;
    }


    public String getStudio() {
        return this.studio;
    }


    public Integer getYear() {
        return this.releaseYear;
    }

}