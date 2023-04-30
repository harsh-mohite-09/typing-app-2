import useTimer from "../hooks/useTimer";
import { useSelector } from "react-redux";

const Timer = () => {
  const { value } = useSelector((store) => store.testConfig);
  const { minutes, seconds } = useTimer(value);

  return (
    <div className="timer">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
