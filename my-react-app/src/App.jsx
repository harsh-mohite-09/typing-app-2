import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      <h1 className="text-xl text-red-400 text-center">
        <FontAwesomeIcon icon={faEnvelope} /> My Typing App
      </h1>
    </div>
  );
}

export default App;
