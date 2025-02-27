import { ResponsiveTreeMap } from "@nivo/treemap";

const Treemap = () => {
  const sampleTreeData = {
    name: "root",
    children: [
      {
        name: "branch A",
        children: [
          { name: "leaf A1", loc: 30 },
          { name: "leaf A2", loc: 80 },
        ],
      },
      {
        name: "branch B",
        children: [
          { name: "leaf B1", loc: 20 },
          { name: "leaf B2", loc: 120 },
        ],
      },
    ],
  };

  return (
    <div className="treemap-parent">
      <ResponsiveTreeMap
        data={sampleTreeData}
        identity="name"
        value="loc"
        innerPadding={3}
        outerPadding={3}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
        parentLabelPosition="left"
        parentLabelTextColor="rgba(255, 255, 255, 0.9)"
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
        colors={{ scheme: "red_grey" }}
      />
    </div>
  );
};

export default Treemap;
