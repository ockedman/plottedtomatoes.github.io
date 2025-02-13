import json
import numpy as np
import pandas as pd

def create_movie_entry(movie_id, title, release_year, release_date, genre, runtime):
    return {
        "movieId": movie_id,
        "title": title,
        "releaseYear": release_year,
        "releaseDate": release_date,
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

def preprocess(lite=False):
    raw_data = pd.read_csv("raw/movies.csv")
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
            first_entry['tconst'],
            title,
            year,
            first_entry['releaseDateTheaters'],
            str(first_entry['genres']).split(","),
            first_entry['runtimeMinutes']
        )
        
        # add IMDb score
        movie['imdbScore'] = {
            "averageScore": int(first_entry['averageRating']),
            "numberVotes": int(first_entry['numVotes'])
        }
        
        # add Rotten Tomatoes scores
        movie['rottenTomatoesScore'] = {
            "audienceScore": int(first_entry['audienceScore']),
            "tomatoMeter": int(first_entry['tomatoMeter'])
        }
        
        if not lite:
            # add Rotten Tomatoes ratings (multiple)
            movie['rottenTomatoesRatings'] = [{
                "date": date,
                "score": 10 if score == "fresh" else 0
            } for date, score in list(zip(movie_data.creationDate, movie_data.reviewState))]
        
        json_data.append(movie)
    
    if not lite:
        print(f"adding {len(json_data)} movies to movies.json".ljust(200))
        with open("movies.json", "w") as file:
            json.dump(json_data, file, indent=2)  # `indent=2` for pretty-printing
    else:
        print(f"adding {len(json_data)} movies to movies_lite.json".ljust(200))
        with open("movies_lite.json", "w") as file:
            json.dump(json_data, file, indent=2)  # `indent=2` for pretty-printing
    
        
def main():
    preprocess()
    preprocess(lite=True)

if __name__ == "__main__":
    main()