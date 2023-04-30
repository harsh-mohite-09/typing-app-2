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
  const newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      newArr[j] = (newArr[j] ?? "") + arr[i];
    } else {
      j++;
    }
  }
  return newArr;
};
