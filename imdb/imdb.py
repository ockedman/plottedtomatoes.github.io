import pandas as pd
import os

class IMDb:
    
    data_df = None
    
    def __init__(self):
        pass
    
    def load_tsvs(self):
        assert(os.path.exists("raw/title.ratings.tsv"))
        assert(os.path.exists("raw/title.basics.tsv"))
        
        ratings_df = pd.read_csv('raw/title.ratings.tsv', sep='\t')
        titles_df = pd.read_csv('raw/title.basics.tsv', sep='\t')
        
        self.data_df = pd.merge(titles_df, ratings_df, on='tconst')
        
        
    def get_movie_by_title(self, title: str):
        """returns a movie, given a title

        Args:
            title (str): title of the movie (capitalisation ignored)

        Returns:
            DataFrame: the movie. if multiple have the same name, the most reviewed one is returned
        """
        result = self.data_df[(self.data_df['primaryTitle'].str.lower() == title.lower()) & (self.data_df['titleType'] == 'movie')]
        if not result.empty:
            most_reviewed = result.sort_values(by='numVotes', ascending=False).iloc[0]
            return most_reviewed[['primaryTitle', 'startYear', 'averageRating', 'numVotes']]
        else:
            return None
        
    def get_top_rated_movies(self, number: int, min_votes: int, year=None):
        """get the top movies according to rating

        Args:
            number (int): the number of movies to return
            min_votes (int): the minimum number of votes
            year (int, optional): only return movies published during this year. Defaults to None.

        Returns:
            DataFrame: the top `number` movies, published in `year` with >= `min_votes` votes
        """
        movies_df = self.data_df[(self.data_df['titleType'] == 'movie') & (self.data_df['numVotes'] >= min_votes)] # filter
        
        if year is not None:
            movies_df = movies_df[movies_df["startYear"].astype(int) == year]
        
        sorted_movies = movies_df.sort_values(by='averageRating', ascending=False)
        
        return sorted_movies.head(number)[['primaryTitle', 'startYear', 'averageRating', 'numVotes']]