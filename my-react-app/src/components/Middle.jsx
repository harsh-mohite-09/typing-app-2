import TestConfig from "./TestConfig";
import Timer from "./Timer";
import WordCount from "./WordCount";
import Words from "./Words";
import { useSelector } from "react-redux";

const Middle = () => {
  const userInput = useSelector((store) => store.user.userInput);
  const { mode } = useSelector((store) => store.testConfig);

  return (
    <div className="text-center">
      <div className="middle-container relative">
        <TestConfig />
        {userInput.length > 0 && mode === "words" && <WordCount />}
        {userInput.length > 0 && mode === "time" && <Timer />}
        <Words />
        <div></div>
      </div>
    </div>
  );
};

export default Middle;
