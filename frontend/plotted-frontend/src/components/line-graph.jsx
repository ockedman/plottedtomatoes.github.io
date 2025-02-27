import { ResponsiveLine } from "@nivo/line";

const LineGraph = ({ lineData }) => {

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
  const transData = transformData(lineData);
  console.log(transData)
  const fixedLineData = transData.map(({ id, data }) => ({ id, data }));

  return (
    <div className="line-graph-parent">
      <ResponsiveLine
        data={fixedLineData}
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
          legend: "Rating",
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
