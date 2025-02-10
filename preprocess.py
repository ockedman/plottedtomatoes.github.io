import json
from imdb.imdb import IMDb
from rottentomatoes.rottentomatoes import RottenTomatoes

def create_movie_entry(movie_id, title, release_year, genre, length):
    return {
        "movieId": movie_id,
        "title": title,
        "releaseYear": release_year,
        "genre": genre,
        "length": length,
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
    
    movie_titles = imdb.get_movie_titles()
    print(f"found {len(movie_titles)} movies on IMDb")
    
    movies_data = list()
    for title in movie_titles:
        print(f"processing {title}..", end=" ")
        # create movie entry using IMDb data
        imdb_movie = imdb.get_movie_by_title(title)
        tomatoes_reviews = tomatoes.get_ratings_by_title(title)
        
        if tomatoes_reviews is None: # skipping movies for which no Rotten Tomatoes ratings were found
            print("skipped.")
            continue
        
        movie = create_movie_entry(
            imdb_movie['tconst'],
            title,
            imdb_movie['startYear'],
            imdb_movie['genres'],
            imdb_movie['runtimeMinutes']
        )
        
        # add IMDb rating
        movie['imdbRating'] = {
            "averageRating": int(imdb_movie["averageRating"]),
            "numberVotes": int(imdb_movie["numVotes"]),
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