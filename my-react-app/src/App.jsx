import Bottom from "./components/Bottom";
import Middle from "./components/Middle";
import Top from "./components/Top";

import { useSelector, useDispatch } from "react-redux";
import { loadWords, setModeWords } from "./utils/appSlice";
import { useEffect } from "react";
import useWords from "./hooks/useWords";

function App() {
  const { words } = useWords();
  const { mode, value } = useSelector((store) => store.testConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadWords(words));
    dispatch(setModeWords(mode, value));
  }, [words]);

  return (
    <>
      <div></div>
      <div className="App">
        <Top />
        <Middle />
        <Bottom />
      </div>
      <div></div>
    </>
  );
}

export default App;
