import { WORD_OF_THE_DAY } from './todays_word'

export function validateLetter(guessLetter: string, index: number) {
    if (WORD_OF_THE_DAY[index] === guessLetter) {
        return true
    }
    if (WORD_OF_THE_DAY.includes(guessLetter)) {
        return false
    }
    return undefined
}

export function validateKeys(guesses: string[]) {
    const keyInfo: { [key: string]: boolean | undefined } = {}

    guesses.forEach((guess) => {
        guess.split('').forEach((l, index) => {
            if (!keyInfo[l]) {
                const validStatus = validateLetter(l, index)
                if (l === 'e') {
                    console.log(validStatus)
                }
                if (
                    validStatus !== undefined &&
                    (validStatus || keyInfo[l] !== true)
                ) {
                    keyInfo[l] = validStatus
                }
            }
        })
    })

    return keyInfo
}
