import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";

const ParallelPlot = ({ data }) => {
  return (
    <>
      <ResponsiveParallelCoordinates
        data={data}
        variables={[
          {
            id: "rottenTomatoesScore",
            label: "RT: Movie Rating",
            value: "rottenTomatoesScore",
            min: "auto",
            max: "auto",
            ticksPosition: "before",
            legendPosition: "start",
            legendOffset: 20,
          },
          {
            id: "imdbScore",
            label: "IMDb: Movie Rating",
            value: "imdbScore",
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
        lineWidth={3}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
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
      />
    </>
  );
};

export default ParallelPlot;
