import words from './words.json'

const isValidWord = (word: string) => words.includes(word)

export default isValidWord
