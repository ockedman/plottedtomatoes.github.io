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
    <div className="app-container">
      <div className="app-row">
        <div>
          <h3 className="title">Big Line graph</h3>
          <div className="parallel-plot1">
            <LineGraph data={lineData} />
          </div>
        </div>
        <div>
          <h3 className="title">Heat matrix-to be</h3>
          <div className="parallel-plot2">
            <HeatMap onCellClick={handleCellClick} />
          </div>
        </div>
      </div>
      <div className="app-row">
        <div>
          <h3 className="title">scatter-to be</h3>
          <div className="parallel-plot2">
            <Scatter />
          </div>
        </div>
        <div>
          <h3 className="title">treemap-to be</h3>
          <div className="parallel-plot1">
            <Treemap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageOne;
