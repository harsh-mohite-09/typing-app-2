import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";

const Top = () => {
  return (
    <div>
      <h1 className="heading text-center">
        <FontAwesomeIcon icon={faKeyboard} className="main-icon" /> YourType
      </h1>
    </div>
  );
};

export default Top;
