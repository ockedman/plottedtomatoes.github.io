import json
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
        "imdbRating": 0
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
    print(f"found {movies.shape[0]} movies on IMDb")
    
    movies_data = list()
    for i, movie in enumerate(movies.values):
        id, title, year = movie
        print(f"processing {i}. {title}..", end=" ")
        # create movie entry using IMDb data
        tomatoes_reviews = tomatoes.get_ratings(title, year)
        
        if tomatoes_reviews is None: # skipping movies for which no Rotten Tomatoes ratings were found
            print("skipped.")
            continue
        
        imdb_movie = imdb.get_movie_from_id(id)
        
        movie = create_movie_entry(
            id,
            title,
            year,
            imdb_movie['genres'].values[0].split(","),
            int(imdb_movie['runtimeMinutes'].iloc[0]) if imdb_movie['runtimeMinutes'].iloc[0] != "\\N" else -1
        )
        
        # add IMDb rating
        movie['imdbRating'] = {
            "averageRating": int(imdb_movie["averageRating"].iloc[0]),
            "numberVotes": int(imdb_movie["numVotes"].iloc[0]),
        }
        
        # add Rotten Tomates ratings (multiple)
        movie['rottenTomatoesRatings'] = [{
            "date": date,
            "score": 10 if score == "fresh" else 0
        } for date, score in tomatoes_reviews.values]
        
        
        movies_data.append(movie)
        print("added.")
    
    print(f"adding {len(movies_data)} movies to movies.json")
    
    with open("movies.json", "w") as file:
        json.dump(movies_data, file, indent=2)  # `indent=2` for pretty-printing

if __name__ == "__main__":
    main()