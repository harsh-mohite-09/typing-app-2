import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  const showScore = useSelector((store) => store.app.showScore);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (!showScore) {
        setKeyPressed(key);
        callback && callback(key);
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
