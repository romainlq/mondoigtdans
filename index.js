const words = ['avion', 'nationale', 'braise', 'bouillabaisse', 'culture', 'vierge', 'camion', 'balise'];

const wordSearch = 'bise';

const checkWord = (searchWord, wordToCheck) => {
    // check if the letters of a word are in the wordToCheck
    // i.e 'con' will return true if the wordToCheck is 'camion'
    const splitSearchWord = searchWord.split('');
    let searchWordIndex = 0;
    const splitWordToCheck = wordToCheck.split('');
    let reconstructedWord = '';
    for (let i=0; i<splitWordToCheck.length; i++) {
        const letter = splitWordToCheck[i];
        if (letter !== splitSearchWord[searchWordIndex]) {
            continue;
        }
        reconstructedWord = reconstructedWord + letter;
        searchWordIndex++;
    }
    return reconstructedWord === searchWord
}


const getWords = (wordSearch, words) => {
    return words.filter(word => {
        return checkWord(wordSearch, word);
    })
}


console.log(getWords(wordSearch, words))

module.exports = {
    getWords,
    checkWord
}
