const prompt = require('prompt-sync')({sigint: true});

const monDoigtDans = require('./index');

const words = ['avion', 'nationale', 'braise', 'bouillabaisse', 'culture', 'vierge', 'camion', 'balise'];

const wordToSearch = prompt('What word do you want to check ? ');

const wordsResult = monDoigtDans.getWords(wordToSearch, words);

let formattedWords = '';

wordsResult.sort().forEach((word, index) => {
    word[0] = word[0].charAt(0).toUpperCase();
    let formattedWord = word.charAt(0).toUpperCase() + word.substr(1);
    if (index === wordsResult.length - 1) {
        formattedWords += formattedWord;
    } else {
        formattedWords += formattedWord + ', ';
    }
});

console.log(`Word list is ${words.sort().join(', ')}`)
console.log(`The filtered words are ${formattedWords}`);
