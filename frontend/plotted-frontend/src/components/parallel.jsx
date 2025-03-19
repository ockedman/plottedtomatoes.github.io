import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";

const ParallelPlot = ({ data }) => {
  return (
      <ResponsiveParallelCoordinates
        data={data}
        variables={[
                {
                  id: "rottenTomatoesScore",
                  label: "Rotten Tomatoes Score",
                  value: "rottenTomatoesScore",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "rtnb",
                  label: "RT: # of ratings",
                  value: "rtnb",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "imdbScore",
                  label: "IMDb Score",
                  value: "imdbScore",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "imdbnb",
                  label: "IMDb: # of Ratings",
                  value: "imdbnb",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "tmdbrating",
                  label: "TMDb Score",
                  value: "tmdbrating",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "tmdbnb",
                  label: "TMDb: # of Ratings",
                  value: "tmdbnb",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "runtime",
                  label: "Runtime",
                  value: "runtime",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
                {
                  id: "releaseYear",
                  label: "Release Year",
                  value: "releaseYear",
                  min: "auto",
                  max: "auto",
                  ticksPosition: "before",
                  legendPosition: "start",
                  legendOffset: 20,
                },
              ]}
        margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
        lineWidth={4}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 70,
            translateY: -150,
            itemsSpacing: 2,
            itemWidth: 60,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        colors={{ scheme: "nivo" }}
        theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: "#ffffff", // Set axis line color to white
                      strokeWidth: 1,
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#ffffff", // Set tick line color to white
                      strokeWidth: 1,
                    },
                    text: {
                      fill: "#ffffff", // Set tick text color to white
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

export default ParallelPlot;
