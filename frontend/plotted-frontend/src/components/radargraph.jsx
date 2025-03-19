import { ResponsiveRadar } from "@nivo/radar";
import { useState, useEffect } from "react";

const RadarGraph = ({ data }) => {
  const [radarData, setRadarData] = useState([
      {
          "field": "IMDB",
          "Interstellar": 8.7,
          "Chicken Little": 5.7
      },
      {
          "field": "RT",
          "Interstellar": 8.6,
          "Chicken Little": 4.7
      },
      {
          "field": "TMDB",
          "Interstellar": 8.451,
          "Chicken Little": 5.9
      },
      {
          "field": "LB",
          "Interstellar": 8.7,
          "Chicken Little": 5.7
      }
  ]);
  const [keys, setKeys] = useState(["Interstellar", "Chicken Little"]);

  const transformToRadarGraphData = (movies) => {
    const fields = ['imdbrating', 'rtrating', 'tmdbrating', 'lbrating'];
    const fieldNames = {
      imdbrating: 'IMDB',
      rtrating: 'RT',
      tmdbrating: 'TMDB',
      lbrating: 'LB'
    };

    return fields.map(field => {
      const fieldData = { field: fieldNames[field] };
      movies.forEach(movie => {
        fieldData[movie.title] = movie[field];
      });
      return fieldData;
    });
  };
  // console.log(transformToRadarGraphData(data));

  useEffect(()=>{
    setRadarData(transformToRadarGraphData(data));
    setKeys(data.map(movie => movie.title));
  }, [data])

  return (
    <ResponsiveRadar
      data={radarData}
      keys={keys}
      indexBy="field"
      maxValue="auto"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      // colors={{ scheme: 'spectral' }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionConfig="wobbly"
      isInteractive={true}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#ffffff', // Set tick text color to white
            },
          },
          legend: {
            text: {
              fill: '#ffffff', // Set legend text color to white
            },
          },
        },
        legends: {
          text: {
            fill: '#ffffff', // Set legend text color to white
          },
        },
        tooltip: {
          container: {
            background: '#333',
            color: '#ffffff', // Set tooltip text color to white
          },
        },
      }}
    />
  );
};

export default RadarGraph;
