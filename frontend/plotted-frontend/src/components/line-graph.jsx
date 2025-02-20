import { ResponsiveLine } from "@nivo/line";

const LineGraph = () => {
  const sampleLineData = [
    {
      id: "series A",
      data: [
        { x: "Point 1", y: 10 },
        { x: "Point 2", y: 30 },
        { x: "Point 3", y: 50 },
        { x: "Point 4", y: 20 },
      ],
    },
    {
      id: "series B",
      data: [
        { x: "Point 1", y: 40 },
        { x: "Point 2", y: 15 },
        { x: "Point 3", y: 75 },
        { x: "Point 4", y: 60 },
      ],
    },
  ];

  return (
    <div style={{ height: "500px" }}>
      {/* <ResponsiveLine
        data={sampleLineData}
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
          legend: "X Axis",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y Axis",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointBorderWidth={2}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices="x"
      /> */}
      <ResponsiveLine
        data={sampleLineData}
        /* Additional chart config */
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        /* Provide our custom color array (use any combination from the palette) */
        colors={["#eb5e28", "#ccc5b9", "#403d39", "#fffcf2"]}
        /* Create a theme object to set background, font color, gridline colors, etc. */
        theme={{
          background: "#252422",
          textColor: "#fffcf2",
          fontSize: 14,
          axis: {
            domain: {
              line: {
                stroke: "#ccc5b9",
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: "#ccc5b9",
                strokeWidth: 1,
              },
              text: {
                fill: "#fffcf2",
              },
            },
          },
          grid: {
            line: {
              stroke: "#403d39" /* subtle grid lines against dark background */,
              strokeWidth: 1,
            },
          },
          crosshair: {
            line: {
              stroke: "#eb5e28",
              strokeWidth: 1,
              strokeOpacity: 0.75,
            },
          },
          tooltip: {
            container: {
              background: "#403d39",
              color: "#fffcf2",
              fontSize: "0.875rem",
            },
          },
          legends: {
            text: {
              fill: "#fffcf2",
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
