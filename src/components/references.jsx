
const referncesPage = () => {

  return (
    <>
      <h2>Additional Info</h2>
      <div>
        <h3>References and Citations</h3>
        <div style={{
          display: "flex",
          justifyContent: "space-around"
        }}>
          <div style={{
            width : "1/3"
          }}>
            <h4>FrontEnd</h4>
            <ul>
              <li>YouTube. (n.d.). React Tabs Tutorial | Easy and Customizable Tabs in React [Video]. YouTube. https://www.youtube.com/watch?v=sWVgMcz8Q44</li>
              <li>Stack Overflow. (n.d.). Stack Overflow - Where Developers Learn, Share, & Build Careers. Retrieved from https://stackoverflow.com/</li>
              <li>NPM. (n.d.). React Tabs - A Simple, Accessible Tabs Component for React. Retrieved from https://www.npmjs.com/package/react-tabs</li>
              <li>React. (n.d.). React – A JavaScript Library for Building User Interfaces. Retrieved from https://react.dev/</li>
              <li>Nivo. (n.d.). Nivo - Dataviz Components for React. Retrieved from https://nivo.rocks/</li>
              <li>Vite. (n.d.). Vite - The Next Generation Frontend Tooling. Retrieved from https://vite.dev/guide/</li>
              <li>YouTube. (n.d.). How to Use Vite Instead of Create React App (CRA) for React Projects [Video]. YouTube. https://www.youtube.com/watch?v=7pXkD8RXat0</li>
              <li>MDN Web Docs. (n.d.). MDN Web Docs - Resources for Developers, by Developers. Retrieved from https://developer.mozilla.org/en-US/</li>
              <li>GeeksforGeeks. (n.d.). GeeksforGeeks - A Computer Science Portal for Geeks. Retrieved from https://www.geeksforgeeks.org/</li>
            </ul>
          </div>
          <div style={{
            width : "1/3"
          }}>
            <h4>Backend</h4>
            <ul>
              <li>Backend Developping (n.d.) https://roadmap.sh/backend</li>
              <li>SpringBoot JPA (n.d.) https://spring.io/guides/gs/accessing-data-jpa</li>
              <li>JPA Repositories (n.d.) https://www.baeldung.com/the-persistence-layer-with-spring-and-jpa</li>
            </ul>
          </div>
          <div style={{
            width : "1/3"
          }}>
            <h4>Data Processing</h4>
            <ul>
              <li>Pandas. (n.d.) https://pandas.pydata.org/docs/index.html</li>
              <li>Stack Overflow. (n.d.) https://stackoverflow.com/</li>
              <li>TMDb API. (n.d.) https://developer.themoviedb.org/docs/getting-started</li>
              <li>IMDb Datasets. (n.d.) https://developer.imdb.com/non-commercial-datasets/</li>
              <li>Letterboxd. (n.d.) https://letterboxd.com/</li>
              <li>Rotten Tomatoes. (n.d.) https://www.rottentomatoes.com/</li>
              <li>Rotten Tomatoes Dataset. (n.d.) https://www.kaggle.com/datasets/andrezaza/clapper-massive-rotten-tomatoes-movies-and-reviews/data</li>
              <li>Reddit. (n.d.) https://www.reddit.com/r/Letterboxd/comments/16u4vky/tip_you_can_find_a_movie_on_letterboxd_via_its/
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Work Distribution</h3>
      <div style={{
        display: "flex",
        justifyContent: "space-around"
      }}>
        <div>
          <h4>Titan</h4>
          <ul>
            <li>Entire Frontend</li>
            <li>Assisted with Viz Design</li>
          </ul>
        </div>
        <div>
          <h4>Adam</h4>
          <ul>
            <li>Entire Frontend</li>
            <li>UI Structure</li>
            <li>Assisted with Viz Design</li>
          </ul>
        </div>
        <div>
          <h4>Daniel</h4>
          <ul>
            <li>Data Fetching using APIs and different Datasets</li>
            <li>Data Processing and Cleaning for the Backend</li>
          </ul>
        </div>
        <div>
          <h4>Yuchen</h4>
          <ul>
            <li>Assisted in the UI Structure with Figma</li>
            <li>Esthetically improved on the Frontend</li>
            <li>Assisted with Viz Design</li>
          </ul>
        </div>
      </div>
      <h3>Data Abstraction and Provenance</h3>
      <div>
        <h4>Provenance</h4>
        <ul>
          <li>Helping esthetically the frontend design</li>
          <li>Assisted with Viz Design</li>
        </ul>

        <h4>Abtraction</h4>
        <ul>
          <li>Deriving averages and sums of ratings per platform or genre.</li>
          <li>Get numerical attributes (number of ratings, averages, runtimes).</li>
          <li>Goal: discover trends, explore information about chosen movies, compare selection criteria, find outliers.</li>
        </ul>
      </div>
      <h3>Task Abstraction</h3>
      <div>
        <ul>
          <li>Juxtaposing the graphs to analyse specific trends (for example choosing a genre with a platform on the heatmap selects that information in the line graph).</li>
          <li>Selecting movies to be compared to compare them.</li>
        </ul>
      </div>
      <h3>Source Code</h3>
      <div>
        <h3>GitHub Repository</h3>
        <ul>
          <li><h4>https://github.com/ockedman/plottedtomatoes.github.io</h4></li>
        </ul>
      </div>
      <h3>Source Data</h3>
      <div>
        <ul>
          <li>TMDB: API calls</li>
          <li>Rotten Tomatoes: https://www.kaggle.com/datasets/stefanoleone992/rotten-tomatoes-movies-and-critic-reviews-dataset</li>
          <li>IMDB: https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows</li>
          <li>Letterboxd: Parser coded by Daniel</li>
        </ul>
      </div>
    </>
  );
};
export default referncesPage;
