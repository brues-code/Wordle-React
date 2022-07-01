import React, { useMemo } from 'react'
import { times } from 'lodash'

import { WORD_SIZE } from 'app/app-constants'
import { isValidWord } from 'utils'

import LetterBox from 'app/components/LetterBox'

import { RowGrid } from './styles'

interface OwnProps {
    guess: string
    complete?: boolean
}

const LetterRow: React.FC<OwnProps> = ({ guess, complete }) => {
    const rowIsComplete = useMemo(
        () => guess.length === WORD_SIZE && complete && isValidWord(guess),
        [guess, complete]
    )

    const renderExistingLetters = useMemo(
        () =>
            guess
                .split('')
                .map((letter, index) => (
                    <LetterBox
                        key={index}
                        index={index}
                        rowIsComplete={rowIsComplete}
                        guessLetter={letter}
                    />
                )),
        [guess, rowIsComplete]
    )

    const renderEmptyLetters = useMemo(
        () =>
            times(Math.max(0, WORD_SIZE - guess.length), (index) => (
                <LetterBox
                    key={index}
                    index={index}
                    rowIsComplete={rowIsComplete}
                />
            )),
        [guess.length, rowIsComplete]
    )

    return (
        <RowGrid>
            {renderExistingLetters}
            {renderEmptyLetters}
        </RowGrid>
    )
}

export default LetterRow
