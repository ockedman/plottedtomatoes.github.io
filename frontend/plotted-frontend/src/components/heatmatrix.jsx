import heatmap from "../assets/heatmap.png";

const HeatMap = () => {
  return (
    <div>
      <img
        src={heatmap}
        alt="Line Graph"
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </div>
  );
};

export default HeatMap;
