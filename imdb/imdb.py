import pandas as pd
import os

class IMDb:
    def __init__(self, path_to_raw_folder):
        assert(os.path.exists(f"{path_to_raw_folder}/title.ratings.tsv"))
        assert(os.path.exists(f"{path_to_raw_folder}/title.basics.tsv"))
        
        ratings_df = pd.read_csv(f'{path_to_raw_folder}/title.ratings.tsv', sep='\t')
        titles_df = pd.read_csv(f'{path_to_raw_folder}/title.basics.tsv', sep='\t')
        
        self.data_df = pd.merge(titles_df, ratings_df, on='tconst')
    
    def get_movie_from_id(self, id: str):
        """returns movie from id"""
        result = self.data_df[(self.data_df['tconst'] == id) & (self.data_df['titleType'] == 'movie')]
        return result[['tconst', 'primaryTitle', 'startYear', 'averageRating', 'numVotes', 'genres', 'runtimeMinutes']]
        
    def get_movie_titles(self):
        """returns movie titles (contains duplicates)"""
        result = self.data_df[self.data_df['titleType'] == 'movie']
        return result['primaryTitle'].tolist()
    
    def get_movies(self):
        """returns movies"""
        result = self.data_df[self.data_df['titleType'] == 'movie']
        return result[['tconst', 'primaryTitle', 'startYear']]
        
    def get_top_rated_movies(self, number: int, min_votes=0, year=None):
        """returns top rates movies from year (optional), with a minimum number of votes (optional)"""
        movies_df = self.data_df[(self.data_df['titleType'] == 'movie') & (self.data_df['numVotes'] >= min_votes)] # filter
        
        if year is not None:
            movies_df = movies_df[movies_df["startYear"].astype(int) == year]
        
        sorted_movies = movies_df.sort_values(by='averageRating', ascending=False)
        
        return sorted_movies.head(number)[['primaryTitle', 'startYear', 'averageRating', 'numVotes']]