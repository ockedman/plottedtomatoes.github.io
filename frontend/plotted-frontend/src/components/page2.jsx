import ParallelPlot from "./parallel";
import RadarGraph from "./radargraph";
import { useState, useEffect } from 'react';
import MovieMap from "./movie-map";
import axios from "axios";
import Scatter from "./scatter";

const PageTwo = () => {
  const [parallelData, setParallelData] = useState([
    {
      movieId: 4200,
      id: "Interstellar",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      runtime: 169,
      releaseYear: 2014,
      rottenTomatoesScore: 8.6,
      rtnb: 375,
      imdbScore: 8.7,
      imdbnb: 2271208,
      tmdbrating: 8.451,
      tmdbnb: 36515,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovies, setSelectedMovies] = useState([
    {
      id: 4200,
      title: "Interstellar",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      studio: ["Legendary Pictures", "Syncopy", "Lynda Obst Productions"],
      country: null,
      runtime: 169,
      rating: null,
      box_office: null,
      budget: 165000000,
      year: 2014,
      rtrating: 8.6,
      lbrating: 8.7,
      imdbrating: 8.7,
      tmdbrating: 8.451,
      rtnb: 375,
      lbnb: 2271208,
      imdbnb: 2271208,
      tmdbnb: 36515,
    },
  ]);

  useEffect(() => {
    const updatedParallelData = selectedMovies.map(movie => ({
      movieId: movie.id,
      id: movie.title,
      releaseYear: movie.year,
      genre: movie.genre,
      runtime: movie.runtime,
      rottenTomatoesScore: movie.rtrating,
      rtnb: movie.rtnb,
      imdbScore: movie.imdbrating,
      imdbnb: movie.imdbnb,
      tmdbrating: movie.tmdbrating,
      tmdbnb: movie.tmdbnb,
    }));
    setParallelData(updatedParallelData);
  }, [selectedMovies]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddMovie = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/movies/movie", {
        params: { title: searchQuery },
      });
      const movieData = res.data;
      if (searchQuery && selectedMovies.length < 10) {
        setSelectedMovies([...selectedMovies, movieData]);
        setSearchQuery('');
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleRemoveMovie = (movie) => {
    setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
  };

  const transformToScatterPlotData = (movies) => {
    let data =  movies.map(movie => ({
      id: movie.title,
      data: [
        {
          x: (movie.imdbnb + movie.tmdbnb + movie.lbnb + movie.rtnb) / 4,
          y: (movie.imdbrating + movie.tmdbrating + movie.lbrating + movie.rtrating) / 4,
          title: movie.title, // Optional: Include the title for tooltips or labels
          size: movie.budget,
        }
      ],
    }));
    // console.log(data)
    return data
  };

  return (
    <div className="content-container">
      <div className="left-column-pg2">
        <div className="parallel-plot-container">
          <ParallelPlot data={parallelData} />
        </div>
        <div className="map-plus-linechart">
          <div className="singular-lineplot">
            <RadarGraph data={selectedMovies} />
          </div>
          <div className="scatter-plot">
            {/* <MovieMap mapData={selectedMovies}/> */}
            <Scatter data={transformToScatterPlotData(selectedMovies)}/>
          </div>
        </div>
      </div>
      <div className="right-column-pg2">
        <div className="chosen-movies">
          <h2>Chosen Movies</h2>
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a movie"
              className="search-input"
            />
            <button onClick={handleAddMovie} disabled={selectedMovies.length >= 10} className="add-button">
              Add Movie
            </button>
          </div>
          <ul className="movie-list">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index} className="movie-item">
                {selectedMovies[index] ? (
                  <>
                    <div>
                      <strong>{selectedMovies[index].title}</strong>
                      {/* <p>Year: {selectedMovies[index].year}</p>
                      <p>Genres: {selectedMovies[index].genre.join(', ')}</p>
                      <p>IMDb Rating: {selectedMovies[index].imdbrating}</p> */}
                    </div>
                    <button onClick={() => handleRemoveMovie(selectedMovies[index])} className="remove-button">
                      Remove
                    </button>
                  </>
                ) : (
                  <span className="empty-slot">Empty Slot</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
