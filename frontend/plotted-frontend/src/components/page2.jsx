import ParallelPlot from "./parallel";
import LineGraph2 from "./line-graph2";
import { useState, useEffect } from 'react'
import MovieMap from "./movie-map";

const PageTwo = () => {
  const [parallelData, setParallelData] = useState([
    {
    movieId: "tt7980152",
    id: "Daughters of the Sexual Revolution: The Untold Story of the Dallas Cowboys Cheerleaders",
    releaseYear: 2018,
    releaseDate: "2018-11-02",
    genre: ["Documentary"],
    runtime: 78.0,
    rottenTomatoesRatings: [],
    rottenTomatoesScore: 86,
    imdbScore: 6,
    },
    {
    movieId: "tt0275847",
    id: "Lilo & Stitch",
    releaseYear: 2002,
    releaseDate: "2002-06-21",
    genre: ["Adventure", "Animation", "Comedy"],
    runtime: 85.0,
    rottenTomatoesRatings: [],
    rottenTomatoesScore: 82,
    imdbScore: 7,
    },
    {
    movieId: "tt0090585",
    id: "Absolute Beginners",
    releaseYear: 1986,
    releaseDate: "1986-04-18",
    genre: ["Drama", "Musical", "Romance"],
    runtime: 108.0,
    rottenTomatoesRatings: [],
    rottenTomatoesScore: 58,
    imdbScore: 5,
    },
    {
    movieId: "tt0073692",
    id: "Shampoo",
    releaseYear: 1975,
    releaseDate: "1975-02-11",
    genre: ["Comedy", "Drama"],
    runtime: 110.0,
    rottenTomatoesRatings: [],
    rottenTomatoesScore: 59,
    imdbScore: 6,
    },
    {
    movieId: "tt0063991",
    id: "Age of Consent",
    releaseYear: 1969,
    releaseDate: "1969-05-14",
    genre: ["Biography", "Comedy", "Drama"],
    runtime: 98.0,
    rottenTomatoesRatings: [],
    rottenTomatoesScore: 75,
    imdbScore: 6,
    },
    ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

  const handleAddMovie = () => {
    if (searchQuery && selectedMovies.length < 5) {
      setSelectedMovies([...selectedMovies, searchQuery]);
      setSearchQuery('');
    }
  };

  const handleRemoveMovie = (movie) => {
    setSelectedMovies(selectedMovies.filter((m) => m !== movie));
  };

  return (
    <div className="content-container">
      <div className="left-column-pg2">
        <div className="parallel-plot-container">
          <ParallelPlot data={parallelData}/>
        </div>
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
              <button onClick={handleAddMovie} disabled={selectedMovies.length >= 5} className="add-button">
                Add Movie
              </button>
            </div>
            <ul className="movie-list">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="movie-item">
                  {selectedMovies[index] ? (
                    <>
                      {selectedMovies[index]}
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
      <div className="right-column-pg2">
          <div className="singular-lineplot">
            <LineGraph2 />
          </div>
          <div className="movie-origins">
            {/* <MovieMap /> */}
          </div>
        </div>
    </div>
  );
};

export default PageTwo;
