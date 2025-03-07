import { ResponsiveHeatMap } from "@nivo/heatmap";
import axios from "axios";
import { useState, useEffect } from "react";

const HeatMap = ({ onCellClick }) => {
  const [matrixData, setMatrixData] = useState([
      {
          "id": "Action",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.2814652014652035
              },
              {
                  "x": "TMDB",
                  "y": 6.373298901098904
              },
              {
                  "x": "RT",
                  "y": 5.970256410256412
              },
              {
                  "x": "LB",
                  "y": 6.2814652014652035
              }
          ]
      },
      {
          "id": "Comedy",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.269981060606061
              },
              {
                  "x": "TMDB",
                  "y": 6.311932291666672
              },
              {
                  "x": "RT",
                  "y": 6.115861742424228
              },
              {
                  "x": "LB",
                  "y": 6.269981060606061
              }
          ]
      },
      {
          "id": "Drama",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.775357873210643
              },
              {
                  "x": "TMDB",
                  "y": 6.708495228357209
              },
              {
                  "x": "RT",
                  "y": 6.841104294478506
              },
              {
                  "x": "LB",
                  "y": 6.775357873210643
              }
          ]
      },
      {
          "id": "Horror",
          "data": [
              {
                  "x": "IMDB",
                  "y": 5.933553719008268
              },
              {
                  "x": "TMDB",
                  "y": 6.129841322314051
              },
              {
                  "x": "RT",
                  "y": 5.226611570247928
              },
              {
                  "x": "LB",
                  "y": 5.933553719008268
              }
          ]
      },
      {
          "id": "Romance",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.486666666666659
              },
              {
                  "x": "TMDB",
                  "y": 6.484063681592046
              },
              {
                  "x": "RT",
                  "y": 6.402089552238811
              },
              {
                  "x": "LB",
                  "y": 6.486666666666659
              }
          ]
      },
      {
          "id": "Sci-Fi",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.374477958236661
              },
              {
                  "x": "TMDB",
                  "y": 6.404048723897915
              },
              {
                  "x": "RT",
                  "y": 5.850116009280749
              },
              {
                  "x": "LB",
                  "y": 6.374477958236661
              }
          ]
      },
      {
          "id": "History",
          "data": [
              {
                  "x": "IMDB",
                  "y": 6.924623115577888
              },
              {
                  "x": "TMDB",
                  "y": 6.802326633165825
              },
              {
                  "x": "RT",
                  "y": 7.24824120603015
              },
              {
                  "x": "LB",
                  "y": 6.924623115577888
              }
          ]
      }
  ])

  useEffect(() => {
    const retrieveMatrixData = async () => {
      // 5 calls of allaverages --
      const sources = ["IMDB", "TMDB", "RT", "LB"];
      const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "History"];
      let data = [];
      for (let i = 0; i < genres.length; i++) {
        try {
          let res = await axios.get("http://localhost:8080/api/movies/allaverages", {
            params: {
              genre: genres[i],
            }
          })
          data.push(res.data);
        } catch (e) {
          console.log(e);
        }
      }
      return data.map((item, index) => {
        const category = genres[index % genres.length];
        return {
          id: category,
          data: sources.map(source => ({
            x: source,
            y: item[source]
          }))
        };
      });;
    }
    const fetchData = async () => {
      const data = await retrieveMatrixData();
      setMatrixData(data);
      // console.log(data);
    }
    fetchData();
  }, []);



  return (
    <div className="heatmatrix-parent">
      <ResponsiveHeatMap
        onClick={(cell, event) => {
          onCellClick(cell, event);
        }}
        data={matrixData}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "",
          legendOffset: 46,
          truncateTickAt: 0,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "genre",
          legendPosition: "middle",
          legendOffset: 70,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "genre",
          legendPosition: "middle",
          legendOffset: -72,
          truncateTickAt: 0,
        }}
        colors={{
          type: "diverging",
          // scheme: "red_yellow_green",
          scheme: "spectral",
          divergeAt: 0.5,
          minValue: 5,
          maxValue: 7.2,
        }}
        emptyColor="#555555"
        legends={[
          {
            anchor: "bottom",
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: "row",
            tickPosition: "after",
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: ">-.2s",
            title: "Value →",
            titleAlign: "start",
            titleOffset: 4,
          },
        ]}
        theme={{
          legends: {
            title: {
              text : {
                fontSize: 12,
                fill: "rgba(255, 252, 242, 0.85)",
              }
            },
            text: {
              fontSize: 12,
              fill: "rgba(255, 252, 242, 0.85)", // Softer white for legend labels
            },
            ticks: {
              text : {
                fontSize: 12,
                fill: "rgba(255, 252, 242, 0.85)",
              }
            }
          },
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "rgba(255, 252, 242, 0.85)", // Softer white for tick labels
              },
            },
            legend: {
              text: {
                fontSize: 14,
                fill: "#ffffff", // Softer white for axis legends
              },
            },
          },
          labels: {
            text: {
              fontSize: 12,
              fill: "rgba(255, 252, 242, 0.85)", // Softer white for cell labels
            },
          },
          tooltip: {
            container: {
              background: "#333",
              color: "rgba(255, 252, 242, 0.9)", // Softer white for tooltips
            },
          },
        }}
      />
    </div>
  );
};

export default HeatMap;
