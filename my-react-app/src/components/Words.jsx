import { useSelector, useDispatch } from "react-redux";
import useKeyPress from "../hooks/useKeyPress";
import { addLetter } from "../utils/userSlice";
import { getUserWords, getAccuracy } from "../utils/helper";
import { useEffect, useRef } from "react";
import { currentTime } from "../utils/time";
import { setShowScore, setTimerId } from "../utils/appSlice";
// import { v4 as uuid } from "uuid";

const Words = () => {
  const wordList = useSelector((store) => store.app.modeWords);
  const timeEnd = useSelector((store) => store.app.timeEnd);
  const showScore = useSelector((store) => store.app.showScore);
  const userInput = useSelector((store) => store.user.userInput);
  // const currentInput = useSelector((store) => store.user.currentInput);
  const { mode, value } = useSelector((store) => store.testConfig);
  const dispatch = useDispatch();

  const userWords = getUserWords(userInput);
  // const currentWord = wordList[userInput.filter((e) => e === " ").length];
  // const nextLetter = currentWord[currentInput.length];
  // const prevLetter =
  //   document.querySelector(".words-container")?.children[
  //     userInput.filter((e) => e === " ").length
  //   ].children[currentInput.length - 1];
  const startTime = useRef(null);
  const endTime = useRef(null);

  useKeyPress((key) => dispatch(addLetter(key)));

  useEffect(() => {
    // markLetter(currentWord);

    if (userInput.length === 1) {
      startTime.current = currentTime();
    }

    if (mode === "words") {
      // console.log(userWords.length, wordList.length);
      if (
        (userWords.length === wordList.length &&
          wordList.at(-1)?.length === userWords?.at(-1)?.length &&
          wordList.at(-1) !== undefined) ||
        userWords.length > wordList.length
      ) {
        dispatch(setShowScore());

        endTime.current = currentTime();
      }
    }
    if (userInput.length === 1 && mode === "time") {
      console.log("Timeout Set");
      const timerId = setTimeout(() => {
        console.log("Timeout end");
        dispatch(setShowScore());
      }, value * 1000);
      dispatch(setTimerId(timerId));
    }
  }, [userInput]);

  const getWPM = (start, end, count) => {
    return (60 * 1000 * count) / (end - start);
  };

  const getTimeWPM = (inputArr, millis) => {
    return (60 * 1000 * inputArr.length) / millis;
  };

  // console.log(
  //   "render words",
  //   nextLetter,
  //   userInput.filter((e) => e === " ").length,
  //   currentInput,
  //   prevLetter
  // );

  return !showScore && !timeEnd ? (
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
    <div>
      {mode === "words" && (
        <div className="text-2xl flex flex-col h-64 justify-between">
          <div>Your Score</div>
          <div className="flex flex-col h-20 justify-between items-center">
            <span className="score-units">wpm</span>
            <span className="score text-[4rem]">
              {getWPM(startTime.current, endTime.current, value)?.toFixed(0)}
            </span>
          </div>
          <div className="flex flex-col h-20 justify-between">
            <span className="score-units">acc</span>
            <span className="score text-[4rem]">
              {getAccuracy(userWords, wordList, userWords.length)?.toFixed(0)}%
            </span>
          </div>
        </div>
      )}
      {mode === "time" && (
        <div className="text-2xl flex flex-col h-64 justify-between">
          <div>Your Score</div>
          <div className="flex flex-col h-20 justify-between">
            <span className="score-units">wpm</span>
            <span className="score text-[4rem]">
              {getTimeWPM(userWords, value * 1000)?.toFixed(0)}
            </span>
          </div>
          <div className="flex flex-col h-20 justify-between">
            <span className="score-units">acc</span>
            <span className="score text-[4rem]">
              {getAccuracy(userWords, wordList, userWords.length)?.toFixed(0)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Words;
