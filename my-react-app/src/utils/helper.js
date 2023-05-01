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
  return shuffleWords(arr).slice(0, 300);
};

export const getUserWords = (arr) => {
  if (arr.length === 0) return arr;
  // const newArr = [];
  // let j = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== " ") {
  //     newArr[j] = (newArr[j] ?? "") + arr[i];
  //   } else {
  //     j++;
  //   }
  // }
  return arr.join("").split(" ");
};

export const getAccuracy = (userWords, wordList, size) => {
  const wordListTrim = wordList.slice(0, size);
  // const newUserInput = userInput.filter((e) => e !== " ");
  // console.log(userWords, wordListTrim);
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
