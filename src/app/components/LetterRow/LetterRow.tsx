import React, { useMemo } from 'react'
import { times } from 'lodash'

import { useApp } from 'app/context/AppContext'
import LetterBox from 'app/components/LetterBox'

import { RowGrid } from './styles'
import { WORD_SIZE } from 'app/app-constants'
import isValidWord from 'utils/valid-word'

type OwnProps = { rowIndex: number }

const LetterRow: React.FC<OwnProps> = ({ rowIndex }) => {
    const { guesses } = useApp()

    const rowOffset = useMemo(() => rowIndex * WORD_SIZE, [rowIndex])

    const rowIsComplete = useMemo(() => {
        const rowLetters = guesses.slice(rowOffset, rowOffset + 5)
        return (
            rowLetters.length === WORD_SIZE && isValidWord(rowLetters.join(''))
        )
    }, [guesses, rowOffset])

    const renderGuesses = useMemo(
        () =>
            times(WORD_SIZE, (index) => {
                const guessIndex = rowOffset + index
                return (
                    <LetterBox
                        key={index}
                        index={index}
                        rowIsComplete={rowIsComplete}
                        guessLetter={guesses[guessIndex]}
                    />
                )
            }),
        [guesses, rowIsComplete, rowOffset]
    )

    return <RowGrid>{renderGuesses}</RowGrid>
}

export default LetterRow
