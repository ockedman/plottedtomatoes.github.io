import { ResponsiveLine } from "@nivo/line";

const LineGraph = ({ lineData }) => {
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
    <div className="line-graph-parent">
      <ResponsiveLine
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
              color: "#ffffff", // Set tooltip text color to white
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
