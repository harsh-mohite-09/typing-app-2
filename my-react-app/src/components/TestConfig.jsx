import { useSelector, useDispatch } from "react-redux";
import { setMode, setValue } from "../utils/testconfigSlice";
import {
  setModeWords,
  resetApp,
  resetShowScore,
  clearTimer,
  resetGame,
} from "../utils/appSlice";
import { resetAll } from "../utils/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFont } from "@fortawesome/free-solid-svg-icons";
import Remaining from "./Remaining";

const times = [15, 30, 60];
const words = [10, 25, 50, 100];

const TestConfig = () => {
  const { mode, value } = useSelector((store) => store.testConfig);
  const dispatch = useDispatch();

  return (
    <div className="p-8 text-center">
      <Remaining />
      <div className="test-config flex w-fit justify-between items-center m-auto">
        <ul className="flex justify-evenly w-[12rem]">
          <li
            onClick={() => {
              dispatch(setMode("time"));
              dispatch(setModeWords({ mode: "time" }));
              dispatch(resetAll());
              dispatch(resetApp());
              dispatch(resetShowScore());
              dispatch(clearTimer());
              dispatch(resetGame());
            }}
            className={mode === "time" ? "mode-active" : ""}
          >
            <FontAwesomeIcon icon={faClock} className="text-xs mr-1" />
            time
          </li>
          <li
            onClick={() => {
              dispatch(setMode("words"));
              dispatch(setModeWords({ mode: "words", value: 10 }));
              dispatch(resetAll());
              dispatch(resetApp());
              dispatch(resetShowScore());
              dispatch(clearTimer());
              dispatch(resetGame());
            }}
            className={mode === "words" ? "mode-active" : ""}
          >
            <FontAwesomeIcon icon={faFont} className="text-sm mr-1" />
            words
          </li>
        </ul>
        <div className="spacer"></div>
        {mode === "time" ? (
          <ul className="test-options flex justify-evenly w-[15rem]">
            {times.map((s, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    dispatch(setValue(s));
                    dispatch(setModeWords({ mode }));
                    dispatch(resetAll());
                    dispatch(resetApp());
                    dispatch(resetShowScore());
                    dispatch(clearTimer());
                    dispatch(resetGame());
                  }}
                  className={value === s ? "mode-active" : ""}
                >
                  {s}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="test-options flex justify-evenly w-[15rem]">
            {words.map((n, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    dispatch(setValue(n));
                    dispatch(setModeWords({ mode, value: n }));
                    dispatch(resetAll());
                    dispatch(resetApp());
                    dispatch(resetShowScore());
                    dispatch(clearTimer());
                    dispatch(resetGame());
                  }}
                  className={value === n ? "mode-active" : ""}
                >
                  {n}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestConfig;
