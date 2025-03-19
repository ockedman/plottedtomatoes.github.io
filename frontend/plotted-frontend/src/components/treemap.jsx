import { ResponsiveTreeMap } from "@nivo/treemap";
import { useEffect } from "react";

const Treemap = () => {
  const sampleTreeData = {
    name: "root",
    children: [
      {
        name: "Action",
        children: [
          { name: "Movie A1", rating: 7.5, numRatings: 100 },
          { name: "Movie A2", rating: 6.8, numRatings: 150 },
        ],
      },
      {
        name: "Comedy",
        children: [
          { name: "Movie C1", rating: 8.2, numRatings: 200 },
          { name: "Movie C2", rating: 7.0, numRatings: 180 },
        ],
      },
      {
        name: "Drama",
        children: [
          { name: "Movie D1", rating: 9.0, numRatings: 300 },
          { name: "Movie D2", rating: 8.5, numRatings: 250 },
        ],
      },
    ],
  };

  return (
    <div className="treemap-parent">
      <ResponsiveTreeMap
        data={sampleTreeData}
        identity="name"
        value="numRatings"
        innerPadding={3}
        outerPadding={3}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
        parentLabelPosition="left"
        parentLabelTextColor="rgba(255, 255, 255, 0.9)"
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.1]] }}
        colors={{ scheme: 'red_grey' }}
        nodeOpacity={1}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        tooltip={({ id, value, color }) => (
          <strong style={{ color }}>
            {id}: {value}
          </strong>
        )}
        theme={{
          tooltip: {
            container: {
              background: '#333',
              color: 'white',
              fontSize: '13px',
            },
          },
        }}
        leavesOnly={true}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default Treemap;
