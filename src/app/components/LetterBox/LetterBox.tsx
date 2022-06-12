import React, { FC, useMemo } from 'react'

import { LetterBorder } from './styles'

import { WORD_OF_THE_DAY } from 'utils/todays_word'

type OwnProps = {
    index: number
    guessLetter?: string
    rowIsComplete: boolean
}

const LetterBox: FC<OwnProps> = ({ guessLetter, rowIsComplete, index }) => {
    const verifyStatus = useMemo(() => {
        if (!rowIsComplete || !guessLetter) {
            return undefined
        }
        if (WORD_OF_THE_DAY[index] === guessLetter) {
            return true
        }
        if (WORD_OF_THE_DAY.includes(guessLetter)) {
            return false
        }
        return undefined
    }, [guessLetter, index, rowIsComplete])

    return (
        <LetterBorder
            verifyStatus={verifyStatus}
            hasChild={Boolean(guessLetter)}
            rowComplete={rowIsComplete}
            index={index}
        >
            {guessLetter}
        </LetterBorder>
    )
}

export default LetterBox
