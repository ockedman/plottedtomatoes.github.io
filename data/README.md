# Data
### `movies.json`

example of movie entry:
```
{
      "movieId": "tt0816692",           # IMDb ID
      "title": "Interstellar",          # Movie Title
      "releaseYear": 2014,              # Year of Movie Release
      "releaseDate": "2014-11-07",      # Exact Date of Movie Release
      "genres": [                       # Genres
        "Adventure",
        "Drama",
        "Sci-Fi"
      ],
      "runtime": 169.0,                 # Runtime in minutes
      "rottenTomatoesScore": {          # Rotten Tomatoes data
        "averageScore": 8.6,            # average score given by the audience (originally 0 to 5 stars)
        "tomatoMeter": 7.2,             # average score given by critics (7.2 means that 72% of the critics gave it a rating of "fresh", as opposed to "rotten")
        "numberVotes": 375              # number of critics who gave a "fresh" or "rotten". audience number not available
      },
      "imdbScore": {                    # IMDb data
        "averageScore": 8.7,            # average score
        "numberVotes": 2271208          # number of votes
      },
      "tmdbScore": {                    # TMDb data
        "averageScore": 8.451,          # average scores
        "numberVotes": 36515            # number of votes
      },
      "rottenTomatoesRatings": {        # what score te critics gave on average, by year
        "2014": 7,
        "2015": 6,
        "2016": 7,
        "2017": 6,
        "2018": 9,
        "2019": 8,
        "2020": 8,
        "2021": 10,
        "2022": 10,
        "2023": 7
      },
      "rottenTomatoesNumVotes": {       # when critics gave their ratings by year
        "2014": 258,
        "2015": 33,
        "2016": 14,
        "2017": 14,
        "2018": 16,
        "2019": 17,
        "2020": 13,
        "2021": 3,
        "2022": 4,
        "2023": 3
      }
    }
```