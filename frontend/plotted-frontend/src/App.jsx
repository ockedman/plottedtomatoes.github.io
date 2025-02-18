import "./App.css";
import ParallelPlot from "./components/parallel";

function App() {
  return (
    <>
      <h1 className="title">Plotted Tomatoes</h1>
      {/* <h1>Parallel Plot</h1> */}
      <div>
        <div className="parallel-plot">
          <ParallelPlot
            data={[
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
            ]}
          ></ParallelPlot>
        </div>
      </div>
    </>
  );
}

export default App;
