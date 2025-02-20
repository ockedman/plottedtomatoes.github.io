import Scatter from "./scatter";
import Treemap from "./treemap";
import HeatMap from "./heatmatrix";
import LineGraph from "./line-graph";

const PageOne = () => {
  return (
    <div className="app-container">
      <div className="app-row">
        <div>
          <h3 className="title">Big Line graph</h3>
          <div className="parallel-plot1">
            <LineGraph />
          </div>
        </div>
        <div>
          <h3 className="title">Heat matrix-to be</h3>
          <div className="parallel-plot2">
            <HeatMap />
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
