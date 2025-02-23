import json
import numpy as np
import pandas as pd

def create_json(data):
    return {
        "data": data
    }

def create_movie_entry(movie_id, title, studios, release_year, release_date, genres, runtime):
    return {
        "movieId": movie_id,
        "title": title,
        "studios": studios,
        "releaseYear": release_year,
        "releaseDate": release_date,
        "genres": genres,
        "runtime": runtime,
        "rottenTomatoesScore": None,
        "imdbScore": None,
        "tmdbScore": None,
        "letterboxdScore": None,
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
        
        movie_data = raw_data[(raw_data['title'] == title) & (raw_data['startYear'] == year)].iloc[0]
        
        movie = create_movie_entry(
            movie_data['imdbId'],
            title,
            str(movie_data['studios']).split(","),
            year,
            movie_data['releaseDateTheaters'],
            str(movie_data['genres']).split(","),
            movie_data['runtimeMinutes']
        )
        
        # add IMDb score
        movie['imdbScore'] = {
            "averageScore": float(movie_data['imdbScore']),
            "numberVotes": int(movie_data['imdbNumVotes'])
        }
        
        # add Rotten Tomatoes scores
        movie['rottenTomatoesScore'] = {
            "averageScore": float(movie_data['audienceScore']) / 10, # adjust from 0 - 100 to 0 - 10
            "tomatoMeter": float(movie_data['tomatoMeter']) / 10,
            "numberVotes": int(movie_data['rottenTomatoesNumVotes'])
        }
        
        # add TMDb Score
        movie['tmdbScore'] = {
            "averageScore": float(movie_data['tmdbAverageScore']),
            "numberVotes": int(movie_data['tmdbNumVotes'])
        }
        
        # add Letterboxd Score
        movie['letterboxdScore'] = {
            "averageScore": float(movie_data['letterboxdAverageScore']) * 2, # adjust from 0 - 5 to 0 - 10
            "numberVotes": int(movie_data['letterboxdNumVotes'])
        }
        
        if not lite:
            # add Rotten Tomatoes ratings (multiple)
            movie['rottenTomatoesRatings'] = json.loads(movie_data['rottenTomatoesReviews'])
            movie['rottenTomatoesNumVotes'] = json.loads(movie_data['rottenTomatoesReviewsNumVotes'])
            
        
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