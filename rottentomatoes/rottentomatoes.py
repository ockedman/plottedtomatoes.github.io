import pandas as pd
import os

class RottenTomatoes():
    def __init__(self, path_to_raw_folder):
        assert(os.path.exists(f"{path_to_raw_folder}/rotten_tomatoes_movie_reviews.csv"))
        assert(os.path.exists(f"{path_to_raw_folder}/rotten_tomatoes_movies.csv"))
        
        self.reviews_df = pd.read_csv(f"{path_to_raw_folder}/rotten_tomatoes_movie_reviews.csv")
        self.movies_df = pd.read_csv(f"{path_to_raw_folder}/rotten_tomatoes_movies.csv")
        
    def get_ratings_by_title(self, title):
        movie = self.movies_df[self.movies_df['title'] == title]['id']
        if movie.size == 0: # no movie found
            return None
        movie_id = movie.values[0]
        reviews = self.reviews_df[self.reviews_df['id'] == movie_id]
        
        return reviews[['creationDate', 'reviewState']]