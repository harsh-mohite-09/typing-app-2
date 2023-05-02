const shuffleWords = (arr) => {
  const shuffledArr = arr.slice();

  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  return shuffledArr;
};

export const getWordsByMode = (mode, value, arr) => {
  if (mode === "words") {
    return shuffleWords(arr).slice(0, value);
  }
  return shuffleWords(arr).slice(0, 100);
};

export const getUserWords = (arr) => {
  if (arr.length === 0) return arr;
  return arr?.join("").split(" ");
};

export const getAccuracy = (userWords, wordList, size) => {
  const wordListTrim = wordList.slice(0, size);
  let count = 0;
  let total = 0;
  for (let i = 0; i < wordListTrim.length; i++) {
    for (let j = 0; j < wordListTrim[i].length; j++) {
      if (wordListTrim[i][j] === userWords[i][j]) {
        count++;
      }
      total++;
    }
  }
  return (count / total) * 100;
};

export const getHiglightedWordList = (wordList, userInput) => {
  const updatedWordList = [];
  const userWords = getUserWords(userInput);
  for (let i = 0; i < wordList.length; i++) {
    const updatedWord = [];
    for (let j = 0; j < wordList[i].length; j++) {
      const letterObj = {};
      if (userWords[i]) {
        if (userWords[i][j]) {
          if (wordList[i][j] === userWords[i][j]) {
            letterObj.text = wordList[i][j];
            letterObj.label = "correct";
          } else {
            letterObj.text = wordList[i][j];
            letterObj.label = "wrong-letter";
          }
        } else {
          letterObj.text = wordList[i][j];
          letterObj.label = "";
        }
        updatedWord.push(letterObj);
      } else {
        letterObj.text = wordList[i][j];
        letterObj.label = "";
        updatedWord.push(letterObj);
      }
    }
    updatedWordList.push(updatedWord);
  }
  return updatedWordList;
};
