import Scatter from "./scatter";
import Treemap from "./treemap";
import HeatMap from "./heatmatrix";
import LineGraph from "./line-graph";
import axios from "axios";
import { useState, useEffect } from "react";

const PageOne = () => {
  // api calls to be made here then passed into the components, or create a helper to
  // pass a state variable into heat matrix, on clicking a cell this would be updated, which can update the
  // (maybe through helper function passed into the heatmatrix component)
  // that helper function updates state in this page, which is passed into the line graph / other props
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  const api_url = "http://localhost:8080/api/movies/";

  //can call allaverages for heatmatrix also --
  // should return hashmap with {{"RT" : 77.5}, {"IMDB" : 65.4}, ...}
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(api_url + "search", {
            params: {
              year: 2014,
              genre: "Sci-Fi",
            },
          });
          // setData(response.data); // Access the data here
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);

  const handleCellClick = async (cell, event) => {
    const [y, x] = cell.id.split('.')
    // try {
    //   // this may have to be several of switch statements for each call,
    //   //
    //   const dataFromApi = await axios.get(api_url + "allaverages", {
    //     params: {
    //       genre: y,
    //       site: x,
    //       min_year: 2000, //random default start range, to be plotted on the line chart
    //     },
    //   });
    //   setData(dataFromApi);
    //   console.log(dataFromApi);
    // } catch (e) {
    //   console.error(e);
    // }
    console.log("The Clicked y: " + y + " the clicked x: " + x);
  };

  return (
    <div className="content-container">
      <div className="left-column">
        <div className="line-chart-container">
          <div className="criteria-selection">
            <ul className="left-list">
              <li>Genre</li>
              <li>Year</li>
              <li>Studio</li>
              <li>Director</li>
              <li>Length</li>
              <li>Country</li>
              <li>Rating</li>
            </ul>
          </div>
          <div className="line-chart">
            <h3> Overview </h3>
            <LineGraph data={data} />
          </div>
        </div>
        <div className="scatter-plot">
          <h3 className="scatter-title"> Ratings vs Reviews </h3>
          <Scatter />
        </div>
      </div>
      <div className="right-column">
        <div className="searchbar">
          <h3> Search Bar here </h3>
        </div>
        <div className="options">
          <ul className="right-list">
            <li>Genre</li>
            <li>Year</li>
            <li>Studio</li>
            <li>Director</li>
            <li>Length</li>
            <li>Country</li>
            <li>Rating</li>
          </ul>
        </div>
        <div className="scrollable-content">
          <div className="heatmap">
            {/* <h3> Heatmap </h3> */}
            <HeatMap onCellClick={handleCellClick} />
          </div>
          <div className="treemap">
            {/* <h3> Treemap </h3> */}
            <Treemap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageOne;
