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
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const handleCellClick = async (cell, event) => {
    const [y, x] = cell.id.split('.')
    console.log(x)
    setY(y);
    setX(x);
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
            <LineGraph y={y} x={x} />
          </div>
        </div>
        <div className="scatter-plot">
          <h3 className="scatter-title"> Ratings vs Reviews </h3>
          <Scatter/>
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
            <HeatMap onCellClick={handleCellClick} />
          </div>
          <div className="treemap">
            <Treemap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageOne;
