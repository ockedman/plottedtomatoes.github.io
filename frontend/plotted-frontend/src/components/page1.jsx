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
  const defData = {
    2010: { IMDB: 6.3167785234899325, TMDB: 6.362583892617452, RT: 5.618791946308726, LB: 6.3167785234899325 },
    2011: { IMDB: 6.357558139534882, TMDB: 6.378604651162789, RT: 5.713953488372096, LB: 6.357558139534882 },
    2012: { IMDB: 6.335761589403978, TMDB: 6.344754966887415, RT: 5.84701986754967, LB: 6.335761589403978 },
    2013: { IMDB: 6.320833333333333, TMDB: 6.37022023809524, RT: 5.749404761904762, LB: 6.320833333333333 },
    2014: { IMDB: 6.405590062111801, TMDB: 6.459788819875777, RT: 5.898136645962731, LB: 6.405590062111801 },
    2015: { IMDB: 6.291176470588235, TMDB: 6.386323529411763, RT: 5.5552941176470565, LB: 6.291176470588235 },
    2016: { IMDB: 6.437172774869108, TMDB: 6.466455497382203, RT: 6.0602094240837685, LB: 6.437172774869108 },
    2017: { IMDB: 6.319620253164557, TMDB: 6.5163544303797485, RT: 5.910759493670887, LB: 6.319620253164557 },
    2018: { IMDB: 6.341764705882352, TMDB: 6.602435294117647, RT: 6.035882352941178, LB: 6.341764705882352 },
    2019: { IMDB: 6.493661971830987, TMDB: 6.753084507042255, RT: 7.3612676056338024, LB: 6.493661971830987 },
    2020: { IMDB: 5.977777777777776, TMDB: 6.586259259259259, RT: 6.800000000000002, LB: 5.977777777777776 },
    2021: { IMDB: 6.279787234042553, TMDB: 6.8017340425531945, RT: 7.740425531914896, LB: 6.279787234042553 },
    2022: { IMDB: 6.330578512396692, TMDB: 6.759115702479337, RT: 7.53636363636364, LB: 6.330578512396692 },
    2023: { IMDB: 5.8684210526315805, TMDB: 6.483421052631579, RT: 8.021052631578948, LB: 5.8684210526315805 },
  };
  // const [error, setError] = useState(null);
  const api_url = "http://localhost:8080/api/movies/";

  //can call allaverages for heatmatrix also --
  // should return hashmap with {{"RT" : 77.5}, {"IMDB" : 65.4}, ...}
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(api_url + "allaverages_across", {
            params: {
              min_year: 2010,
              max_year: 2023,            },
          });
          setData(response.data); // Access the data here
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);

  const handleCellClick = async (cell, event) => {
    const [y, x] = cell.id.split('.')
    try {
      // this may have to be several of switch statements for each call, when we add more x / y
      const res = await axios.get(api_url + "average_across", {
        params: {
          genre: y,
          platform: x,
          min_year: 2010,
          max_year: 2023,
        },
      });
      console.log(res.data);
      const finalData = {};
      Object.keys(res.data).forEach((key, index) => {
        finalData[key] = {
          [x] : res.data[key],
        };
      });
      console.log(finalData);
      setData(finalData);
    } catch (e) {
      console.error(e);
    }
    // console.log("The Clicked y: " + y + " the clicked x: " + x);
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
            <LineGraph lineData={data == null ? defData : data} />
          </div>
        </div>
        <div className="scatter-plot">
          <h3 className="scatter-title"> Ratings vs Reviews </h3>
          <Scatter data={data}/>
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
