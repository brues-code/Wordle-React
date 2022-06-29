import { WORD_OF_THE_DAY } from './todays_word'
import { GuessType } from 'enums'

export function validateLetter(guessLetter: string, index: number) {
    if (WORD_OF_THE_DAY[index] === guessLetter) {
        return GuessType.Correct
    }
    if (WORD_OF_THE_DAY.includes(guessLetter)) {
        return GuessType.WrongIndex
    }
    return GuessType.Invalid
}

export function validateKeys(guesses: string[]) {
    const keyInfo: { [key: string]: GuessType } = {}
    guesses.forEach((guess) => {
        for (let i = 0; i < guess.length; i++) {
            const letter = guess[i]
            if (keyInfo[letter] !== GuessType.Correct) {
                const validStatus = validateLetter(letter, i)
                if (!keyInfo[letter] || validStatus > keyInfo[letter]) {
                    keyInfo[letter] = validStatus
                }
            }
        }
    })
    return keyInfo
}
