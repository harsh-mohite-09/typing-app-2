import { useSelector, useDispatch } from "react-redux";
import useKeyPress from "../hooks/useKeyPress";
import { addLetter } from "../utils/userSlice";
import { getUserWords } from "../utils/helper";
import { useState, useEffect } from "react";

const Words = () => {
  const [showScore, setShowScore] = useState(false);
  const wordList = useSelector((store) => store.app.modeWords);
  const userInput = useSelector((store) => store.user.userInput);
  const currentInput = useSelector((store) => store.user.currentInput);
  const { mode, value } = useSelector((store) => store.testConfig);
  const dispatch = useDispatch();

  const userWords = getUserWords(userInput);

  const currentWord = document.querySelector(".active");

  useKeyPress((key) => dispatch(addLetter(key)));

  useEffect(() => {
    markLetter(currentWord);
    if (mode === "words") {
      if (
        userWords.length === wordList.length &&
        wordList.at(-1)?.length === userWords?.at(-1)?.length &&
        wordList.at(-1) !== undefined
      ) {
        setShowScore(true);
      }
    }
  }, [currentInput]);

  const markLetter = (currentWord) => {
    if (!currentWord) return;
    if (currentInput?.length > currentWord.children.length) return;
    if (currentInput) {
      for (let i = 0; i < currentWord?.children.length; i++) {
        currentWord?.children[i].classList.remove("correct");
        currentWord?.children[i].classList.remove("wrong-letter");
      }
      for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === currentWord?.children[i].textContent) {
          currentWord?.children[i].classList.add("correct");
        } else {
          currentWord?.children[i].classList.add("wrong-letter");
        }
      }
    }
  };

  console.log(userWords, userWords.at(-1), wordList.at(-1));

  return !showScore ? (
    <div className="words-container relative">
      {/* <div id="caret"></div> */}
      {wordList.map((item, i) => {
        return (
          <div
            key={i}
            className={
              "word flex " +
              (i === userInput.filter((e) => e === " ").length ? "active" : "")
            }
          >
            {item.split("").map((letter, j) => {
              return (
                <div key={j} className="letter">
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Your Score: </h1>
  );
};

export default Words;
