
/**
 * Check if a word is inside another word
 * @param {string} wordToSearch
 * @param {string} wordToCheck
 * @returns a boolean check
 *
 */
const checkWord = (wordToSearch, wordToCheck) => {
  if (typeof wordToSearch !== "string") {
    throw new Error("wordToSearch must be a string");
  }

  const splitWordToSearch = wordToSearch.trim().toLowerCase().split("");
  let wordToSearchIndex = 0;

  const splitWordToCheck = wordToCheck.trim().toLowerCase().split("");
  let reconstructedWord = "";

  for (let i = 0; i < splitWordToCheck.length; i++) {
    const letter = splitWordToCheck[i];
    if (letter !== splitWordToSearch[wordToSearchIndex]) {
      continue;
    }
    wordToSearchIndex++;
    reconstructedWord = reconstructedWord + letter;
  }
  return reconstructedWord.length === splitWordToSearch.length;
};

/**
 *
 * @param {string} wordToSearch
 * @param {string[]} words
 * @returns an array of the words containing the wordToSearch
 */
const getWords = (wordToSearch, words) => {
  if (!Array.isArray(words)) {
    throw new Error("words must be an array");
  }

  // Check that wordToSearch is a string
  if (typeof wordToSearch !== "string") {
    throw new Error("wordToSearch must be a string");
  }

  return words.filter((word) => {
    return checkWord(wordToSearch, word);
  });
};

module.exports = {
  getWords,
  checkWord,
};
