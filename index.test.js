const { expect } = require('@jest/globals');
const monDoigtDans = require('./index');

const words = ['avion', 'nationale', 'braise', 'bouillabaisse', 'culture', 'vierge', 'camion', 'balise'];


test('check that a word is inside a list', () => {
    expect(monDoigtDans.getWords('bise', words).length).toBe(3);
    expect(monDoigtDans.getWords('con', words).length).toBe(1);
});

test('check that uppercase and lowercase does not interfere', () => {
    expect(monDoigtDans.getWords('bise', words).length).toBe(3);
    expect(monDoigtDans.getWords('bISe', words).length).toBe(3);
    expect(monDoigtDans.getWords('BISE', words).length).toBe(3);
})

test('check that a word is NOT inside the list', () => {
    expect(monDoigtDans.getWords('bloup', words).length).toBe(0);
});

test('we return an empty list when the words list is empty', () => {
    expect(monDoigtDans.getWords('bloup', []).length).toBe(0);
});

test('check that we return an error when list is not an array', () => {
    expect(() => monDoigtDans.getWords('bloup', 'bloup')).toThrow('words must be an array');
})

test('check that the word to search is a string', () => {
    expect(() => monDoigtDans.getWords(1, words)).toThrow('wordToSearch must be a string');
})

test('check that a word is inside another word - bise is inside balise', () => {
    expect(monDoigtDans.checkWord('bise', 'balise')).toBe(true);
    expect(monDoigtDans.checkWord('con', 'camion')).toBe(true);
})

test('check that a word is NOT inside another word - voiture is NOT inside balise', () => {
    expect(monDoigtDans.checkWord('voiture', 'balise')).toBe(false);
})
