import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import axios from "axios";

const LineGraph = ({ y, x }) => {
  const [data, setData] = useState([
      {
          "id": "IMDB",
          "data": [
              {
                  "x": "2010",
                  "y": 6.3167785234899325
              },
              {
                  "x": "2011",
                  "y": 6.357558139534882
              },
              {
                  "x": "2012",
                  "y": 6.335761589403978
              },
              {
                  "x": "2013",
                  "y": 6.320833333333333
              },
              {
                  "x": "2014",
                  "y": 6.405590062111801
              },
              {
                  "x": "2015",
                  "y": 6.291176470588235
              },
              {
                  "x": "2016",
                  "y": 6.437172774869108
              },
              {
                  "x": "2017",
                  "y": 6.319620253164557
              },
              {
                  "x": "2018",
                  "y": 6.341764705882352
              },
              {
                  "x": "2019",
                  "y": 6.493661971830987
              },
              {
                  "x": "2020",
                  "y": 5.977777777777776
              },
              {
                  "x": "2021",
                  "y": 6.279787234042553
              },
              {
                  "x": "2022",
                  "y": 6.330578512396692
              },
              {
                  "x": "2023",
                  "y": 5.8684210526315805
              }
          ]
      },
      {
          "id": "TMDB",
          "data": [
              {
                  "x": "2010",
                  "y": 6.362583892617452
              },
              {
                  "x": "2011",
                  "y": 6.378604651162789
              },
              {
                  "x": "2012",
                  "y": 6.344754966887415
              },
              {
                  "x": "2013",
                  "y": 6.37022023809524
              },
              {
                  "x": "2014",
                  "y": 6.459788819875777
              },
              {
                  "x": "2015",
                  "y": 6.386323529411763
              },
              {
                  "x": "2016",
                  "y": 6.466455497382203
              },
              {
                  "x": "2017",
                  "y": 6.5163544303797485
              },
              {
                  "x": "2018",
                  "y": 6.602435294117647
              },
              {
                  "x": "2019",
                  "y": 6.753084507042255
              },
              {
                  "x": "2020",
                  "y": 6.586259259259259
              },
              {
                  "x": "2021",
                  "y": 6.8017340425531945
              },
              {
                  "x": "2022",
                  "y": 6.759115702479337
              },
              {
                  "x": "2023",
                  "y": 6.483421052631579
              }
          ]
      },
      {
          "id": "RT",
          "data": [
              {
                  "x": "2010",
                  "y": 5.618791946308726
              },
              {
                  "x": "2011",
                  "y": 5.713953488372096
              },
              {
                  "x": "2012",
                  "y": 5.84701986754967
              },
              {
                  "x": "2013",
                  "y": 5.749404761904762
              },
              {
                  "x": "2014",
                  "y": 5.898136645962731
              },
              {
                  "x": "2015",
                  "y": 5.5552941176470565
              },
              {
                  "x": "2016",
                  "y": 6.0602094240837685
              },
              {
                  "x": "2017",
                  "y": 5.910759493670887
              },
              {
                  "x": "2018",
                  "y": 6.035882352941178
              },
              {
                  "x": "2019",
                  "y": 7.3612676056338024
              },
              {
                  "x": "2020",
                  "y": 6.800000000000002
              },
              {
                  "x": "2021",
                  "y": 7.740425531914896
              },
              {
                  "x": "2022",
                  "y": 7.53636363636364
              },
              {
                  "x": "2023",
                  "y": 8.021052631578948
              }
          ]
      },
      {
          "id": "LB",
          "data": [
              {
                  "x": "2010",
                  "y": 6.3167785234899325
              },
              {
                  "x": "2011",
                  "y": 6.357558139534882
              },
              {
                  "x": "2012",
                  "y": 6.335761589403978
              },
              {
                  "x": "2013",
                  "y": 6.320833333333333
              },
              {
                  "x": "2014",
                  "y": 6.405590062111801
              },
              {
                  "x": "2015",
                  "y": 6.291176470588235
              },
              {
                  "x": "2016",
                  "y": 6.437172774869108
              },
              {
                  "x": "2017",
                  "y": 6.319620253164557
              },
              {
                  "x": "2018",
                  "y": 6.341764705882352
              },
              {
                  "x": "2019",
                  "y": 6.493661971830987
              },
              {
                  "x": "2020",
                  "y": 5.977777777777776
              },
              {
                  "x": "2021",
                  "y": 6.279787234042553
              },
              {
                  "x": "2022",
                  "y": 6.330578512396692
              },
              {
                  "x": "2023",
                  "y": 5.8684210526315805
              }
          ]
      }
  ]);
  const api_url = "http://localhost:8080/api/movies/";
  const transformData = (originalData) => {
    const series = ["IMDB", "TMDB", "RT", "LB"];
    return series.map((serie) => ({
      id: serie,
      data: Object.keys(originalData).map((year) => {
        const value = originalData[year]?.[serie]; // Safe access
        if (value === undefined || isNaN(value)) {
          console.warn(`Skipping invalid data: year=${year}, serie=${serie}, value=${value}`);
          return null;
        }
        return { x: String(year), y: value }; // Ensure x is a string
      }).filter(point => point !== null), // Remove invalid points
    })).filter(serie => serie.data.length > 0); // Remove empty series
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(api_url + "allaverages_across", {
        params: {
          min_year: 2010,
          max_year: 2023,            },
      });
      const transData = transformData(response.data);
      const fixedLineData = transData.map(({ id, data }) => ({ id, data }));
      setData(fixedLineData);
    } catch (err) {
      console.log(err);
    }
  };

  const callSpecificPlatformAndGenre = async (x, y) => {
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
      const finalData = {};
      Object.keys(res.data).forEach((key, index) => {
        finalData[key] = {
          [x] : res.data[key],
        };
      });
      const transData = transformData(finalData);
      const fixedLineData = transData.map(({ id, data }) => ({ id, data }));
      setData(fixedLineData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
      if (x != null && y != null) {
        callSpecificPlatformAndGenre(x, y);
      } else {
        fetchData();
      }
    }, [x,y]);

  return (
    <div className="line-graph-parent">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Average Rating",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "red_grey" }}
        pointSize={10}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices="x"
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#ffffff", // Set text color to white
              },
            },
            legend: {
              text: {
                fill: "#ffffff", // Set legend text color to white
              },
            },
          },
          legends: {
            text: {
              fill: "#ffffff", // Set legend text color to white
            },
          },
          tooltip: {
            container: {
              color: "#ffaaaa", // Set tooltip text color to white
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
