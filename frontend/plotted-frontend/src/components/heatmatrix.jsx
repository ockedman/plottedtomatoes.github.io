import { ResponsiveHeatMap } from "@nivo/heatmap";

const HeatMap = ({ onCellClick }) => {
  const sampleHeatMapData = [
    {
      id: "Action",
      data: [
        { x: "IMDb", y: -60215 },
        { x: "RottenTomatoes", y: 41691 },
        { x: "Metacritic", y: 9128 },
        { x: "Letterboxd", y: -35060 },
      ],
    },
    {
      id: "Comedy",
      data: [
        { x: "IMDb", y: 2187 },
        { x: "RottenTomatoes", y: 56071 },
        { x: "Metacritic", y: -37631 },
        { x: "Letterboxd", y: 87241 },
      ],
    },
    {
      id: "Drama",
      data: [
        { x: "IMDb", y: 87592 },
        { x: "RottenTomatoes", y: -66951 },
        { x: "Metacritic", y: 11467 },
        { x: "Letterboxd", y: 0 },
      ],
    },
    {
      id: "Horror",
      data: [
        { x: "IMDb", y: -27520 },
        { x: "RottenTomatoes", y: 12598 },
        { x: "Metacritic", y: 80915 },
        { x: "Letterboxd", y: -50018 },
      ],
    },
    {
      id: "Romance",
      data: [
        { x: "IMDb", y: -78155 },
        { x: "RottenTomatoes", y: 27830 },
        { x: "Metacritic", y: 46110 },
        { x: "Letterboxd", y: 9382 },
      ],
    },
    {
      id: "Sci-Fi",
      data: [
        { x: "IMDb", y: 34413 },
        { x: "RottenTomatoes", y: 99388 },
        { x: "Metacritic", y: 47101 },
        { x: "Letterboxd", y: -53809 },
      ],
    },
    {
      id: "Documentary",
      data: [
        { x: "IMDb", y: -30650 },
        { x: "RottenTomatoes", y: 58100 },
        { x: "Metacritic", y: 91789 },
        { x: "Letterboxd", y: -44039 },
      ],
    },
    {
      id: "Mystery",
      data: [
        { x: "IMDb", y: -44844 },
        { x: "RottenTomatoes", y: 56824 },
        { x: "Metacritic", y: -85571 },
        { x: "Letterboxd", y: 7639 },
      ],
    },
  ];

  return (
    <div className="heatmatrix-parent">
      <ResponsiveHeatMap
        onClick={(cell, event) => {
          onCellClick(cell, event);
        }}
        data={sampleHeatMapData}
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
          legend: "country",
          legendPosition: "middle",
          legendOffset: 70,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: -72,
          truncateTickAt: 0,
        }}
        colors={{
          type: "diverging",
          scheme: "red_grey",
          divergeAt: 0.5,
          minValue: -100000,
          maxValue: 100000,
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
                fill: "rgba(255, 252, 242, 0.9)", // Softer white for axis legends
              },
            },
          },
          labels: {
            text: {
              fontSize: 12,
              fill: "rgba(255, 252, 242, 0.85)", // Softer white for cell labels
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: "rgba(255, 252, 242, 0.85)", // Softer white for legend labels
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
