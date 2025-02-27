import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const Scatter = () => {
  const sampleScatterData = [
    {
      id: "group A",
      data: [
        { x: 10, y: 20 },
        { x: 25, y: 15 },
        { x: 40, y: 35 },
        { x: 65, y: 50 },
      ],
    },
    {
      id: "group B",
      data: [
        { x: 15, y: 30 },
        { x: 30, y: 10 },
        { x: 45, y: 45 },
        { x: 70, y: 60 },
      ],
    },
  ];

  return (
    <div className="scatter-parent">
      <ResponsiveScatterPlot
        data={sampleScatterData}
        margin={{ top: 10, right: 40, bottom: 60, left: 60 }}
        xScale={{ type: "linear", min: 0, max: "auto" }}
        yScale={{ type: "linear", min: 0, max: "auto" }}
        blendMode="normal"
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "# of Ratings (1000s)",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 2,
          tickPadding: 2,
          tickRotation: 0,
          legend: "Rating Score",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        colors={{
          scheme: "red_grey",
        }}
        nodeSize={10}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "rgba(255, 252, 242, 0.85)", // Softer white for axis tick labels
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
              fill: "rgba(255, 252, 242, 0.85)", // Softer white for point labels
            },
          },
          tooltip: {
            container: {
              background: "#333", // Keeps tooltips readable
              color: "rgba(255, 252, 242, 0.9)", // Softer white for tooltips
            },
          },
        }}
      />
    </div>
  );
};

export default Scatter;
