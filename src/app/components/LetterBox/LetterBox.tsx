import React, { FC, useMemo } from 'react'

import { LetterBorder } from './styles'

type OwnProps = {
    guessLetter?: string
    rowIsComplete: boolean
}

const LetterBox: FC<OwnProps> = ({ guessLetter, rowIsComplete }) => {
    return (
        <LetterBorder hasChild={Boolean(guessLetter)}>
            {guessLetter}
        </LetterBorder>
    )
}

export default LetterBox
