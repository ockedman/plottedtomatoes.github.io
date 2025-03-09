import HeatMap from "./heatmatrix";
import LineGraph from "./line-graph";
import MovieMap from "./movie-map";
import { useState, useEffect } from "react";
import Bump from "./bumpchart";
import SwarmPlot from "./swarmchart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const PageOne = () => {
  // api calls to be made here then passed into the components, or create a helper to
  // pass a state variable into heat matrix, on clicking a cell this would be updated, which can update the
  // (maybe through helper function passed into the heatmatrix component)
  // that helper function updates state in this page, which is passed into the line graph / other props
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState('Platform');
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [lineChartName, setLineChartName] = useState("Ratings over time")

  const myList = ['Platform', 'Genre']; // 'Rating', 'Studio'

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const handleCellClick = async (cell, event) => {
    const [y, x] = cell.id.split('.')
    // console.log(x, y)
    setY(y);
    setX(x);
    setSelectedItem("Platform");
    y[0].toUpperCase();
    setLineChartName(y + " Platform Ratings over Time");
  };

  return (
    <div className="content-container">
      <div className="left-column">
        <div className="line-chart-container">
          <div className="criteria-selection">
            <ul className="left-list">
              {myList.map((item, index) => (
                <li
                  key={index}
                  onClick={() => selectItem(item)}
                  style={{
                    backgroundColor: selectedItem === item ? '#eb5e28' : 'white',
                    color: selectedItem === item ? 'white' : 'black',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    borderRadius: '6px',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="line-chart border-background-change">
            <h3> {lineChartName} </h3>
            <LineGraph y={y} x={x} type={selectedItem}  />
          </div>
        </div>
        <div className="movie-origins border-background-change">
          {/* <h3 className="scatter-title"> Ratings vs Reviews </h3> */}
          {/* <Scatter/> */}
          {/* <MovieMap /> */}
          <SwarmPlot />
        </div>
      </div>
      <div className="right-column">
        <div className="searchbar">
          <h3> Search Bar here </h3>
        </div>
        {/* <div className="options">
          <ul className="right-list">
            <li>Genre</li>
            <li>Year</li>
            <li>Studio</li>
            <li>Director</li>
            <li>Length</li>
            <li>Country</li>
            <li>Rating</li>
          </ul>
        </div> */}
        <div className="scrollable-content">
          <div className="heatmap border-background-change">
            <HeatMap onCellClick={handleCellClick} />
          </div>
          {/* <Tabs>
            <TabList className="swarmbump-tabs">
              <Tab>Genre Rankings</Tab>
              <Tab>Genre Distributions</Tab>
            </TabList>
            <TabPanel> */}
              <div className="bump border-background-change">
                <Bump />
              </div>
            {/* </TabPanel>
            <TabPanel>
              <div className="genre-distributions">
                <SwarmPlot />
              </div>
            </TabPanel>
          </Tabs> */}
        </div>
      </div>
    </div>
  );
};
export default PageOne;
