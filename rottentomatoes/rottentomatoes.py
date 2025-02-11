import pandas as pd
import os

class RottenTomatoes():
    def __init__(self, path_to_raw_folder):
        assert(os.path.exists(f"{path_to_raw_folder}/rotten_tomatoes_movie_reviews.csv"))
        assert(os.path.exists(f"{path_to_raw_folder}/rotten_tomatoes_movies.csv"))
        
        self.reviews_df = pd.read_csv(f"{path_to_raw_folder}/rotten_tomatoes_movie_reviews.csv")
        self.movies_df = pd.read_csv(f"{path_to_raw_folder}/rotten_tomatoes_movies.csv")
    
    def get_movie_titles(self):
        """returns movie titles (contains duplicates)"""
        return self.movies_df["title"].tolist()
    
    def get_movies(self, title, year=None):
        """returns movies from title and year (optional)"""
        if year is None:
            result = self.movies_df[(self.movies_df['title'] == title)]
        else:
            result = self.movies_df[(self.movies_df['title'] == title) & (self.movies_df['releaseDateTheaters'].str.contains(year))]
        return result[["id", "title", "releaseDateTheaters", "runtimeMinutes"]]
      
    def get_ratings(self, title, year=None):
        """returns ratings from title and year (optional)"""
        if year is None:
            movie = self.movies_df[self.movies_df['title'] == title]['id']
        else:
            movie = self.movies_df[(self.movies_df['title'] == title) & (self.movies_df['releaseDateTheaters'].str.contains(year))]['id']
            
        if movie.size == 0: # no movie found
            return None
        
        movie_id = movie.values[0]
        reviews = self.reviews_df[self.reviews_df['id'] == movie_id]
        
        if reviews.size == 0:
            return None
        
        return reviews[['creationDate', 'reviewState']]