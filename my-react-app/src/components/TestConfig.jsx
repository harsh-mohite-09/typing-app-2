import { useState } from "react";

const TestConfig = () => {
  const [testType, setTestType] = useState("time");
  return (
    <div className="p-8 text-center">
      <div className="test-config flex w-fit justify-between p-2 m-auto">
        <ul className="flex justify-evenly w-[10rem]">
          <li onClick={() => setTestType("time")}>time</li>
          <li onClick={() => setTestType("words")}>words</li>
        </ul>
        {testType === "time" ? (
          <ul className="test-options flex justify-evenly w-[15rem]">
            <li>15</li>
            <li>30</li>
            <li>60</li>
            <li>120</li>
          </ul>
        ) : (
          <ul className="test-options flex justify-evenly w-[15rem]">
            <li>10</li>
            <li>25</li>
            <li>50</li>
            <li>100</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestConfig;
