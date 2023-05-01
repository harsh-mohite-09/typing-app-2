import Remaining from "./Remaining";
import TestConfig from "./TestConfig";
import Words from "./Words";

const Middle = () => {
  return (
    <div className="text-center">
      <div className="middle-container relative">
        <TestConfig />
        <Remaining />
        <Words />
        <div></div>
      </div>
    </div>
  );
};

export default Middle;
