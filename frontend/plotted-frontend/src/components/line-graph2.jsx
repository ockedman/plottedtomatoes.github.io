import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";

const LineGraph2 = ({ y, x }) => {
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
  ]);

  return (
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
  );
};

export default LineGraph2;
