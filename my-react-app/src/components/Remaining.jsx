import Timer from "./Timer";
import WordCount from "./WordCount";
import { useSelector } from "react-redux";

const Remaining = () => {
  // const userInput = useSelector((store) => store.user.userInput);
  const { mode } = useSelector((store) => store.testConfig);
  const showScore = useSelector((store) => store.app.showScore);
  const gameStart = useSelector((store) => store.app.gameStart);

  return (
    <>
      {!showScore && gameStart && mode === "words" && <WordCount />}
      {!showScore && gameStart && mode === "time" && <Timer />}
    </>
  );
};

export default Remaining;
