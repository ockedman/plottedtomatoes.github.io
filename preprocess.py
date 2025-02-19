import json
import numpy as np
import pandas as pd

def create_json(data):
    return {
        "data": data
    }

def create_movie_entry(movie_id, title, release_year, release_date, genre, runtime):
    return {
        "movieId": movie_id,
        "title": title,
        "releaseYear": release_year,
        "releaseDate": release_date,
        "genres": genre,
        "runtime": runtime,
        "rottenTomatoesScore": None,
        "imdbScore": None,
        "tmdbScore": None,
        "rottenTomatoesRatings": None,
        "rottenTomatoesNumVotes": None
    }

def preprocess(lite=False):
    raw_data = pd.read_csv("processed/movies.csv")
    movies = set(list(zip(raw_data.title, raw_data.startYear)))
    nr_of_movies = len(movies)
    print(f"processing {nr_of_movies} movies".ljust(200))
    
    json_data = list()
    for i, (title, year) in enumerate(movies):
        if i%100 == 0:
            progress = int((i / nr_of_movies) * 100)
            bar = "=" * progress
            print(f" progress: {progress}% [{bar:<{100}}]".ljust(200), end="\r")
        
        movie_data = raw_data[(raw_data['title'] == title) & (raw_data['startYear'] == year)]
        first_entry = movie_data.iloc[0]
        
        movie = create_movie_entry(
            first_entry['imdbId'],
            title,
            year,
            first_entry['releaseDateTheaters'],
            str(first_entry['genres']).split(","),
            first_entry['runtimeMinutes']
        )
        
        # add IMDb score
        movie['imdbScore'] = {
            "averageScore": float(first_entry['imdbScore']),
            "numberVotes": int(first_entry['imdbNumVotes'])
        }
        
        # add Rotten Tomatoes scores
        movie['rottenTomatoesScore'] = {
            "averageScore": float(first_entry['audienceScore']) / 10, # we want scale 0 - 10
            "tomatoMeter": float(first_entry['tomatoMeter']) / 10,
            "numberVotes": int(first_entry['rottenTomatoesNumVotes'])
        }
        
        movie['tmdbScore'] = {
            "averageScore": float(first_entry['tmdbAverageScore']),
            "numberVotes": int(first_entry['tmdbNumVotes'])
        }
        
        if not lite:
            # add Rotten Tomatoes ratings (multiple)
            movie['rottenTomatoesRatings'] = json.loads(first_entry['rottenTomatoesReviews'])
            movie['rottenTomatoesNumVotes'] = json.loads(first_entry['rottenTomatoesReviewsNumVotes'])
            
        
        json_data.append(movie)
        
        movies_json = create_json(json_data)
    
    if not lite:
        print(f"adding {len(json_data)} movies to movies.json".ljust(200))
        with open("data/movies.json", "w") as file:
            json.dump(movies_json, file, indent=2)  # `indent=2` for pretty-printing
    else:
        print(f"adding {len(json_data)} movies to movies_lite.json".ljust(200))
        with open("data/movies_lite.json", "w") as file:
            json.dump(movies_json, file, indent=2)  # `indent=2` for pretty-printing
    
        
def main():
    preprocess()
    preprocess(lite=True)

if __name__ == "__main__":
    main()