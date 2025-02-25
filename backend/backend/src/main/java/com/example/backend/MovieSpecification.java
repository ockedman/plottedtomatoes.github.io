package com.example.backend;

import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.Predicate;

import java.util.ArrayList;
import java.util.List;

public class MovieSpecification {

    public static Specification<Movie> filterMovies(String genre, String country, String studio, String year, String rating, String min_year, String max_year) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (genre != null) {
                predicates.add(criteriaBuilder.isMember(genre, root.get("genre")));
            }
            if (country != null) {
                predicates.add(criteriaBuilder.equal(root.get("country"), country));
            }
            if (studio != null) {
                predicates.add(criteriaBuilder.isMember(studio, root.get("studio")));
            }
            if (year != null) {
                predicates.add(criteriaBuilder.equal(root.get("releaseYear"), Integer.parseInt(year)));
            }
            if (rating != null) {
                predicates.add(criteriaBuilder.equal(root.get("rating"), rating));
            }
            if (min_year != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("releaseYear"), Integer.parseInt(min_year)));
            }
            if (max_year != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("releaseYear"), Integer.parseInt(max_year)));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
