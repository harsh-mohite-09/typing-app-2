import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  const userInput = useSelector((store) => store.user.userInput);
  const currentInput = useSelector((store) => store.user.currentInput);
  const showScore = useSelector((store) => store.app.showScore);
  // const wordList = useSelector((store) => store.app.modeWords);
  // const currentWord = wordList[userInput.filter((e) => e === " ").length];

  useEffect(() => {
    const downHandler = ({ key }) => {
      // console.log(currentInput, currentWord);
      if (!showScore) {
        setKeyPressed(key);
        callback && callback(key);
        if (key.length === 1 && key !== " ") {
          const letter =
            document.querySelector(".words-container")?.children[
              userInput.filter((e) => e === " ").length
            ].children[currentInput.length];
          // console.log(letter.textContent, key);
          if (key === letter.textContent) {
            letter.classList.add("correct");
          } else {
            letter.classList.add("wrong-letter");
          }
        }

        if (key === "Backspace") {
          const letter =
            document.querySelector(".words-container")?.children[
              userInput.filter((e) => e === " ").length
            ].children[currentInput.length - 1];
          letter.classList.remove("correct");
          letter.classList.remove("wrong-letter");
        }
      }
    };

    // const upHandler = () => {
    //   setKeyPressed(null);
    // };

    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      // window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
