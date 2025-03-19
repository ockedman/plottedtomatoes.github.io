import { ResponsiveSwarmPlot } from '@nivo/swarmplot'


const SwarmPlot = () => {
  const data = [
    {
      "id": "0.0",
      "group": "Action",
      "score": 87,
      "frequency": 12
    },
    {
      "id": "0.1",
      "group": "Action",
      "score": 90,
      "frequency": 12
    },
    {
      "id": "0.2",
      "group": "Action",
      "score": 76,
      "frequency": 8
    },
    {
      "id": "0.3",
      "group": "Action",
      "score": 85,
      "frequency": 6
    },
    {
      "id": "0.4",
      "group": "Action",
      "score": 73,
      "frequency": 9
    },
    {
      "id": "0.5",
      "group": "Action",
      "score": 75,
      "frequency": 17
    },
    {
      "id": "0.6",
      "group": "Action",
      "score": 66,
      "frequency": 19
    },
    {
      "id": "0.7",
      "group": "Action",
      "score": 57,
      "frequency": 16
    },
    {
      "id": "0.8",
      "group": "Action",
      "score": 82,
      "frequency": 11
    },
    {
      "id": "0.9",
      "group": "Action",
      "score": 70,
      "frequency": 7
    },
    {
      "id": "1.0",
      "group": "Comedy",
      "score": 93,
      "frequency": 19
    },
    {
      "id": "1.1",
      "group": "Comedy",
      "score": 91,
      "frequency": 11
    },
    {
      "id": "1.2",
      "group": "Comedy",
      "score": 60,
      "frequency": 10
    },
    {
      "id": "1.3",
      "group": "Comedy",
      "score": 37,
      "frequency": 7
    },
    {
      "id": "1.4",
      "group": "Comedy",
      "score": 64,
      "frequency": 9
    },
    {
      "id": "1.5",
      "group": "Comedy",
      "score": 80,
      "frequency": 13
    },
    {
      "id": "1.6",
      "group": "Comedy",
      "score": 85,
      "frequency": 11
    },
    {
      "id": "1.7",
      "group": "Comedy",
      "score": 88,
      "frequency": 19
    },
    {
      "id": "1.8",
      "group": "Comedy",
      "score": 59,
      "frequency": 17
    },
    {
      "id": "1.9",
      "group": "Comedy",
      "score": 78,
      "frequency": 6
    },
    {
      "id": "2.0",
      "group": "Drama",
      "score": 65,
      "frequency": 15
    },
    {
      "id": "2.1",
      "group": "Drama",
      "score": 74,
      "frequency": 8
    },
    {
      "id": "2.2",
      "group": "Drama",
      "score": 85,
      "frequency": 19
    },
    {
      "id": "2.3",
      "group": "Drama",
      "score": 54,
      "frequency": 12
    },
    {
      "id": "2.4",
      "group": "Drama",
      "score": 63,
      "frequency": 9
    },
    {
      "id": "2.5",
      "group": "Drama",
      "score": 65,
      "frequency": 5
    },
    {
      "id": "2.6",
      "group": "Drama",
      "score": 60,
      "frequency": 20
    },
    {
      "id": "2.7",
      "group": "Drama",
      "score": 82,
      "frequency": 11
    },
    {
      "id": "2.8",
      "group": "Drama",
      "score": 62,
      "frequency": 13
    },
    {
      "id": "2.9",
      "group": "Drama",
      "score": 58,
      "frequency": 9
    },
    {
      "id": "3.0",
      "group": "Horror",
      "score": 64,
      "frequency": 9
    },
    {
      "id": "3.1",
      "group": "Horror",
      "score": 80,
      "frequency": 15
    },
    {
      "id": "3.2",
      "group": "Horror",
      "score": 75,
      "frequency": 13
    },
    {
      "id": "3.3",
      "group": "Horror",
      "score": 34,
      "frequency": 13
    },
    {
      "id": "3.4",
      "group": "Horror",
      "score": 85,
      "frequency": 12
    },
    {
      "id": "3.5",
      "group": "Horror",
      "score": 25,
      "frequency": 20
    },
    {
      "id": "3.6",
      "group": "Horror",
      "score": 74,
      "frequency": 4
    },
    {
      "id": "3.7",
      "group": "Horror",
      "score": 88,
      "frequency": 7
    },
    {
      "id": "3.8",
      "group": "Horror",
      "score": 98,
      "frequency": 20
    },
    {
      "id": "3.9",
      "group": "Horror",
      "score": 78,
      "frequency": 12
    },
    {
      "id": "4.0",
      "group": "Sci-Fi",
      "score": 69,
      "frequency": 14
    },
    {
      "id": "4.1",
      "group": "Sci-Fi",
      "score": 62,
      "frequency": 7
    },
    {
      "id": "4.2",
      "group": "Sci-Fi",
      "score": 99,
      "frequency": 8
    },
    {
      "id": "4.3",
      "group": "Sci-Fi",
      "score": 84,
      "frequency": 14
    },
    {
      "id": "4.4",
      "group": "Sci-Fi",
      "score": 62,
      "frequency": 16
    },
    {
      "id": "4.5",
      "group": "Sci-Fi",
      "score": 73,
      "frequency": 16
    },
    {
      "id": "4.6",
      "group": "Sci-Fi",
      "score": 62,
      "frequency": 12
    },
    {
      "id": "4.7",
      "group": "Sci-Fi",
      "score": 84,
      "frequency": 8
    },
    {
      "id": "4.8",
      "group": "Sci-Fi",
      "score": 60,
      "frequency": 8
    },
    {
      "id": "4.9",
      "group": "Sci-Fi",
      "score": 44,
      "frequency": 4
    },
    {
      "id": "5.0",
      "group": "Romance",
      "score": 57,
      "frequency": 8
    },
    {
      "id": "5.1",
      "group": "Romance",
      "score": 92,
      "frequency": 10
    },
    {
      "id": "5.2",
      "group": "Romance",
      "score": 86,
      "frequency": 13
    },
    {
      "id": "5.3",
      "group": "Romance",
      "score": 54,
      "frequency": 18
    },
    {
      "id": "5.4",
      "group": "Romance",
      "score": 68,
      "frequency": 14
    },
    {
      "id": "5.5",
      "group": "Romance",
      "score": 85,
      "frequency": 12
    },
    {
      "id": "5.6",
      "group": "Romance",
      "score": 62,
      "frequency": 20
    },
    {
      "id": "5.7",
      "group": "Romance",
      "score": 46,
      "frequency": 5
    },
    {
      "id": "5.8",
      "group": "Romance",
      "score": 87,
      "frequency": 9
    },
    {
      "id": "5.9",
      "group": "Romance",
      "score": 48,
      "frequency": 8
    },
    {
      "id": "6.0",
      "group": "Thriller",
      "score": 97,
      "frequency": 10
    },
    {
      "id": "6.1",
      "group": "Thriller",
      "score": 97,
      "frequency": 11
    },
    {
      "id": "6.2",
      "group": "Thriller",
      "score": 83,
      "frequency": 12
    },
    {
      "id": "6.3",
      "group": "Thriller",
      "score": 75,
      "frequency": 19
    },
    {
      "id": "6.4",
      "group": "Thriller",
      "score": 94,
      "frequency": 20
    },
    {
      "id": "6.5",
      "group": "Thriller",
      "score": 80,
      "frequency": 17
    },
    {
      "id": "6.6",
      "group": "Thriller",
      "score": 77,
      "frequency": 11
    },
    {
      "id": "6.7",
      "group": "Thriller",
      "score": 62,
      "frequency": 20
    },
    {
      "id": "6.8",
      "group": "Thriller",
      "score": 95,
      "frequency": 18
    },
    {
      "id": "6.9",
      "group": "Thriller",
      "score": 77,
      "frequency": 15
    }
  ];

  return (
    <ResponsiveSwarmPlot
            data={data}
            groups={["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller"]}
            identity="id"
            value="score"
            valueScale={{ type: 'linear', min: 0, max: 100, reverse: false }}
            size={{
                key: 'frequency',
                values: [
                    4,
                    20
                ],
                sizes: [
                    6,
                    20
                ]
            }}
            forceStrength={4}
            simulationIterations={100}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.6
                    ],
                    [
                        'opacity',
                        0.5
                    ]
                ]
            }}
            margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
            axisTop={{
                orient: 'top',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Genre',
                legendPosition: 'middle',
                legendOffset: -46,
                truncateTickAt: 0
            }}
            axisRight={{
                orient: 'right',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: 76,
                truncateTickAt: 0
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Genre',
                legendPosition: 'middle',
                legendOffset: 46,
                truncateTickAt: 0
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendPosition: 'middle',
                legendOffset: -76,
                truncateTickAt: 0
            }}
            theme={{
                  axis: {
                    domain: {
                      line: {
                        stroke: 'white',
                        strokeWidth: 1,
                      },
                    },
                    ticks: {
                      line: {
                        stroke: 'white',
                        strokeWidth: 1,
                      },
                      text: {
                        fill: 'white',
                      },
                    },
                    legend: {
                      text: {
                        fill: 'white',
                      },
                    },
                  },
                  legends: {
                    text: {
                      fill: 'white',
                    },
                  },
                  tooltip: {
                    container: {
                      background: 'white',
                      color: 'black',
                    },
                  },
                }}
        />
  );
}

export default SwarmPlot;
