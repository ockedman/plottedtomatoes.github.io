import {ResponsiveBump} from "@nivo/bump"
import axios from "axios";
import { useState, useEffect } from "react";

const Bump = () => {

  const fetchData = async () => {
    const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "History"];
    let data = [];
    for (let i = 0; i < genres.length; i++) {
      let curr_data = [];
      for (let j = 2024 - genres.length; j < 2024; j++) { // Adjusted to fetch data for 7 years
        try {
          let res = await axios.get("http://localhost:8080/api/movies/allaverages", {
            params: {
              genre: genres[i],
              min_year: j,
              max_year: j
            }
          });
          curr_data.push({ year: j, ...res.data });
        } catch (e) {
          console.log(e);
        }
      }
      data.push({ genre: genres[i], data: curr_data });
    }
    return data;
  };

  const transformToBumpChartData = (data) => {
    const years = [...new Set(data.flatMap(d => d.data.map(item => item.year)))];
    const genres = data.map(d => d.genre);

    const rankings = years.map(year => {
      const yearData = data.map(d => {
        const yearItem = d.data.find(item => item.year === year);
        return {
          genre: d.genre,
          averageRating: yearItem ? (yearItem.IMDB + yearItem.TMDB + yearItem.RT + yearItem.LB) / 4 : 0
        };
      });
      yearData.sort((a, b) => b.averageRating - a.averageRating);
      return yearData.map((d, index) => ({
        genre: d.genre,
        year: year,
        rank: index + 1
      }));
    });

    const bumpChartData = genres.map(genre => ({
      id: genre,
      data: rankings.flatMap(rank => rank.filter(d => d.genre === genre).map(d => ({
        x: d.year.toString(),
        y: d.rank
      })))
    }));

    return bumpChartData;
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      const transformedData = transformToBumpChartData(fetchedData);
      setData(transformedData);
    };
    getData();
  }, []);

  return (
    <ResponsiveBump
            data={data}
            // colors={{ scheme: 'spectral' }}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36,
                truncateTickAt: 0
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ranking',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            axisRight={null}
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
                                background: '#333333', // Set tooltip background color
                                color: '#ffffff', // Set tooltip text color
                              },
                            },
                  }}
        />
  )
};

export default Bump;
