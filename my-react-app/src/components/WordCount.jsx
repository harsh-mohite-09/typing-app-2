import { useSelector } from "react-redux";
import { getUserWords } from "../utils/helper";

const WordCount = () => {
  const wordList = useSelector((store) => store.app.modeWords);
  const userInput = useSelector((store) => store.user.userInput);

  const userWords = getUserWords(userInput);

  return (
    <div className="word-count">
      {userWords.length}/{wordList.length}
    </div>
  );
};

export default WordCount;
