import { ResponsiveHeatMap } from "@nivo/heatmap";

const HeatMap = () => {
  const sampleHeatMapData = [
    {
      id: "Action",
      data: [
        { x: "IMDb", y: -60215 },
        { x: "RottenTomatoes", y: 41691 },
        { x: "Metacritic", y: 9128 },
        { x: "Letterboxd", y: -35060 },
        { x: "FilmAffinity", y: 28571 },
        { x: "IMDb Freedive", y: 87777 },
        { x: "AllMovie", y: -79438 },
        { x: "Flickchart", y: 16942 },
        { x: "Criticker", y: -52014 },
      ],
    },
    {
      id: "Comedy",
      data: [
        { x: "IMDb", y: 2187 },
        { x: "RottenTomatoes", y: 56071 },
        { x: "Metacritic", y: -37631 },
        { x: "Letterboxd", y: 87241 },
        { x: "FilmAffinity", y: 1291 },
        { x: "IMDb Freedive", y: -70224 },
        { x: "AllMovie", y: 45205 },
        { x: "Flickchart", y: -9173 },
        { x: "Criticker", y: 73157 },
      ],
    },
    {
      id: "Drama",
      data: [
        { x: "IMDb", y: 87592 },
        { x: "RottenTomatoes", y: -66951 },
        { x: "Metacritic", y: 11467 },
        { x: "Letterboxd", y: 0 },
        { x: "FilmAffinity", y: 33323 },
        { x: "IMDb Freedive", y: -46640 },
        { x: "AllMovie", y: 55224 },
        { x: "Flickchart", y: -76491 },
        { x: "Criticker", y: 30409 },
      ],
    },
    {
      id: "Horror",
      data: [
        { x: "IMDb", y: -27520 },
        { x: "RottenTomatoes", y: 12598 },
        { x: "Metacritic", y: 80915 },
        { x: "Letterboxd", y: -50018 },
        { x: "FilmAffinity", y: 43668 },
        { x: "IMDb Freedive", y: 99102 },
        { x: "AllMovie", y: 12838 },
        { x: "Flickchart", y: -37412 },
        { x: "Criticker", y: 68721 },
      ],
    },
    {
      id: "Romance",
      data: [
        { x: "IMDb", y: -78155 },
        { x: "RottenTomatoes", y: 27830 },
        { x: "Metacritic", y: 46110 },
        { x: "Letterboxd", y: 9382 },
        { x: "FilmAffinity", y: -52977 },
        { x: "IMDb Freedive", y: -19012 },
        { x: "AllMovie", y: 85025 },
        { x: "Flickchart", y: -20691 },
        { x: "Criticker", y: 4396 },
      ],
    },
    {
      id: "Sci-Fi",
      data: [
        { x: "IMDb", y: 34413 },
        { x: "RottenTomatoes", y: 99388 },
        { x: "Metacritic", y: 47101 },
        { x: "Letterboxd", y: -53809 },
        { x: "FilmAffinity", y: -55378 },
        { x: "IMDb Freedive", y: 65390 },
        { x: "AllMovie", y: 28357 },
        { x: "Flickchart", y: -40761 },
        { x: "Criticker", y: 72880 },
      ],
    },
    {
      id: "Documentary",
      data: [
        { x: "IMDb", y: -30650 },
        { x: "RottenTomatoes", y: 58100 },
        { x: "Metacritic", y: 91789 },
        { x: "Letterboxd", y: -44039 },
        { x: "FilmAffinity", y: 4583 },
        { x: "IMDb Freedive", y: -18547 },
        { x: "AllMovie", y: 14195 },
        { x: "Flickchart", y: 3091 },
        { x: "Criticker", y: -47282 },
      ],
    },
    {
      id: "Mystery",
      data: [
        { x: "IMDb", y: -44844 },
        { x: "RottenTomatoes", y: 56824 },
        { x: "Metacritic", y: -85571 },
        { x: "Letterboxd", y: 7639 },
        { x: "FilmAffinity", y: 94706 },
        { x: "IMDb Freedive", y: 30815 },
        { x: "AllMovie", y: 77259 },
        { x: "Flickchart", y: -90067 },
        { x: "Criticker", y: 64052 },
      ],
    },
  ];

  return (
    <div style={{ height: "500px" }}>
      <ResponsiveHeatMap
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
