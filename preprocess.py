import json
import numpy as np
from imdb.imdb import IMDb
from rottentomatoes.rottentomatoes import RottenTomatoes

def create_movie_entry(movie_id, title, release_year, genre, runtime):
    return {
        "movieId": movie_id,
        "title": title,
        "releaseYear": release_year,
        "genre": genre,
        "runtime": runtime,
        "rottenTomatoesRatings": [],
        "rottenTomatoesScore": -1,
        "imdbScore": -1
    }
        
def add_rating(movie_entry, source, score, num_votes, timestamp):
    rating = {
        "source": source,
        "score": score,
        "numVotes": num_votes,
        "timestamp": timestamp
    }
    movie_entry["ratings"].append(rating)
    
def main():
    imdb = IMDb("raw")
    tomatoes = RottenTomatoes("raw")
    
    movies = imdb.get_movies()
    nr_of_movies = movies.shape[0]
    
    movies_data = list()
    for i, movie in enumerate(movies.values):
        id, title, year = movie
        print(f"processing {i}/{nr_of_movies}. {title}".ljust(200), end="\r", flush=True)
        # create movie entry using IMDb data
        tomatoes_reviews = tomatoes.get_ratings(title, year)
        
        if tomatoes_reviews is None: # skipping movies for which no Rotten Tomatoes ratings were found
            continue
        
        imdb_movie = imdb.get_movie_from_id(id)
        
        movie = create_movie_entry(
            id,
            title,
            year,
            imdb_movie['genres'].values[0].split(","),
            int(imdb_movie['runtimeMinutes'].iloc[0])
        )
        
        # add IMDb score
        movie['imdbScore'] = {
            "averageScore": int(imdb_movie["averageRating"].iloc[0]),
            "numberVotes": int(imdb_movie["numVotes"].iloc[0]),
        }
        
        # add Rotten Tomatoes scores
        a, t = tomatoes.get_scores(title, year)
        movie['rottenTomatoesScore'] = {
            "audienceScore": a,
            "tomatoMeter": t,  
        }
        
        # add Rotten Tomatoes ratings (multiple)
        movie['rottenTomatoesRatings'] = [{
            "date": date,
            "score": 10 if score == "fresh" else 0
        } for date, score in tomatoes_reviews.values]
        
        
        movies_data.append(movie)
    
    print(f"adding {len(movies_data)} movies to movies.json")
    
    with open("movies.json", "w") as file:
        json.dump(movies_data, file, indent=2)  # `indent=2` for pretty-printing

if __name__ == "__main__":
    main()