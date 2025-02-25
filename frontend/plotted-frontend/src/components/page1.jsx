import Scatter from "./scatter";
import Treemap from "./treemap";
import HeatMap from "./heatmatrix";
import LineGraph from "./line-graph";
import axios from "axios";
import { useState } from "react";

const PageOne = () => {
  // api calls to be made here then passed into the components, or create a helper to
  // pass a state variable into heat matrix, on clicking a cell this would be updated, which can update the
  // (maybe through helper function passed into the heatmatrix component)
  // that helper function updates state in this page, which is passed into the line graph / other props
  const [lineData, setLineData] = useState(null);

  const handleCellClick = async (x_var, y_var) => {
    try {
      const dataFromApi = await axios.get("http://localhost:8080/moviegenre/", {
        params: {
          genre: x_var,
          site: y_var,
        },
      });
      setLineData(dataFromApi);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // <div>
    //   <div className="app-row">
    //     <div>
    //       <h3 className="title">Big Line graph</h3>
    //       <div className="parallel-plot1">
    //         <LineGraph data={lineData} />
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="title">Heat matrix-to be</h3>
    //       <div className="parallel-plot2">
    //         <HeatMap onCellClick={handleCellClick} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="app-row">
    //     <div>
    //       <h3 className="title">scatter-to be</h3>
    //       <div className="parallel-plot2">
    //         <Scatter />
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="title">treemap-to be</h3>
    //       <div className="parallel-plot1">
    //         <Treemap />
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
            <LineGraph data={lineData} />
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
