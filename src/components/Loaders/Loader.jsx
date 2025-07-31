import { Cloader } from "./Loader.styled";

const Loader = ({ width = 220, height = 130 }) => {
  const colorStart = "#c1cddc";
  const colorEnd = "#e9eef7";

  return (
    <Cloader
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
      }}
    ></Cloader>
  );
};

export default Loader;
