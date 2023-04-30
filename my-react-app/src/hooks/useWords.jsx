import { useState, useEffect } from "react";

const useWords = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    try {
      const res = await fetch(
        "https://monkeytype.com/languages/english_1k.json"
      );
      const json = await res.json();
      setWords(json.words);
    } catch (e) {
      console.log(e);
    }
  };

  return { words };
};

export default useWords;
