import Timer from "./Timer";
import WordCount from "./WordCount";
import { useSelector } from "react-redux";

const Remaining = () => {
  const userInput = useSelector((store) => store.user.userInput);
  const { mode } = useSelector((store) => store.testConfig);
  const showScore = useSelector((store) => store.app.showScore);

  return (
    <>
      {!showScore && userInput.length > 0 && mode === "words" && <WordCount />}
      {!showScore && userInput.length > 0 && mode === "time" && <Timer />}
    </>
  );
};

export default Remaining;
