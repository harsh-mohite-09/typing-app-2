import { useSelector, useDispatch } from "react-redux";
import useKeyPress from "../hooks/useKeyPress";
import { addLetter } from "../utils/userSlice";
import {
  getUserWords,
  getAccuracy,
  getHiglightedWordList,
} from "../utils/helper";
import { useEffect, useRef } from "react";
import { currentTime } from "../utils/time";
import {
  setShowScore,
  setTimerId,
  setGameStart,
  resetGame,
} from "../utils/appSlice";
import { v4 as uuid } from "uuid";

const Words = () => {
  const wordList = useSelector((store) => store.app.modeWords);
  const timeEnd = useSelector((store) => store.app.timeEnd);
  const gameStart = useSelector((store) => store.app.gameStart);
  const showScore = useSelector((store) => store.app.showScore);
  const userInput = useSelector((store) => store.user.userInput);
  const { mode, value } = useSelector((store) => store.testConfig);
  const dispatch = useDispatch();

  const userWords = getUserWords(userInput);
  const startTime = useRef(null);
  const endTime = useRef(null);

  useKeyPress((key) => dispatch(addLetter(key)));

  useEffect(() => {
    if (userInput.length === 1) {
      startTime.current = currentTime();
      dispatch(setGameStart());
    }

    if (mode === "words") {
      if (
        (userWords.length === wordList.length &&
          wordList.at(-1)?.length === userWords?.at(-1)?.length &&
          wordList.at(-1) !== undefined) ||
        userWords.length > wordList.length
      ) {
        dispatch(setShowScore());
        dispatch(resetGame());
        endTime.current = currentTime();
      }
    }
    if (userInput.length === 1 && mode === "time" && !gameStart) {
      console.log("Timeout Set");
      dispatch(setGameStart());
      const timerId = setTimeout(() => {
        console.log("Timeout end");
        dispatch(setShowScore());
        dispatch(resetGame());
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

  const highlitedWordList = getHiglightedWordList(wordList, userInput);

  return !showScore && !timeEnd ? (
    <div className="words-container relative">
      {/* <div id="caret"></div> */}
      {highlitedWordList.map((item, i) => {
        return (
          <div
            key={uuid()}
            className={
              "word flex " +
              (i === userInput.filter((e) => e === " ").length ? "active" : "")
            }
          >
            {item.map(({ text, label }) => {
              return (
                <div key={uuid()} className={`letter ${label}`}>
                  {text}
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
