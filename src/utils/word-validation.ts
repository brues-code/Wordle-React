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

export function validateKeys(
    guesses: string[],
    keyInfo: { [key: string]: GuessType } = {}
) {
    console.log(keyInfo)
    guesses.forEach((guess) =>
        guess.split('').forEach((l, index) => {
            if (keyInfo[l] !== GuessType.Correct) {
                const validStatus = validateLetter(l, index)
                // console.log(validStatus, l)
                if (!keyInfo[l] || validStatus > keyInfo[l]) {
                    keyInfo[l] = validStatus
                }
            }
        })
    )

    return keyInfo
}
