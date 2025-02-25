package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>, JpaSpecificationExecutor<Movie>  {
    Movie findByTitle(String title);

    List<Movie> findAllByOrderByRTratingDesc();
    List<Movie> findAllByOrderByLBratingDesc();
    List<Movie> findAllByOrderByMCratingDesc();
    List<Movie> findAllByOrderByIMDBratingDesc();
    List<Movie> findAllByOrderByTMDBratingDesc();
}