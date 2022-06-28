import React, { FC, useMemo } from 'react'

import { LetterBorder } from './styles'

import { validateLetter } from 'utils/word-validation'

type OwnProps = {
    index: number
    guessLetter?: string
    rowIsComplete?: boolean
}

const LetterBox: FC<OwnProps> = ({ guessLetter, rowIsComplete, index }) => {
    const verifyStatus = useMemo(() => {
        if (!rowIsComplete || !guessLetter) {
            return undefined
        }
        return validateLetter(guessLetter, index)
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
