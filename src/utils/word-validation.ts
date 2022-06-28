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
    const keyInfo: { [key: string]: GuessType | undefined } = {}

    guesses.forEach((guess) => {
        guess.split('').forEach((l, index) => {
            if (!keyInfo[l]) {
                const validStatus = validateLetter(l, index)
                if (
                    validStatus !== undefined &&
                    (validStatus === GuessType.Correct ||
                        keyInfo[l] !== GuessType.Correct)
                ) {
                    keyInfo[l] = validStatus
                }
            }
        })
    })

    return keyInfo
}
