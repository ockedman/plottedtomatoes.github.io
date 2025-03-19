import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { useState, useEffect } from "react";
import axios from "axios";

const Scatter = ({x, y, data}) => {

  const getNodeSize = (node) => {
    const minBudget = 0;
    const maxBudget = 200000000;
    const minSize = 10;
    const maxSize = 40;

    if (node.data.size < minBudget) {
      return minSize;
    } else if (node.data.size > maxBudget) {
      return maxSize;
    } else {
      return ((node.data.size - minBudget) / (maxBudget - minBudget)) * (maxSize - minSize) + minSize;
    }
  };

  return (
    <div className="scatter-parent">
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 10, right: 40, bottom: 60, left: 60 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: "auto", max: "auto" }}
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
          scheme: "nivo",
        }}
        nodeSize={getNodeSize}
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
