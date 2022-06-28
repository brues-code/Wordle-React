import React, { useMemo } from 'react'
import { times } from 'lodash'

import { useApp } from 'app/context/AppContext'
import LetterRow from 'app/components/LetterRow'

import { BoardContainer } from './styles'
import { TOTAL_CHANCES } from 'app/app-constants'

const WordleBoard: React.FC = () => {
    const { guesses, currentGuess } = useApp()

    const renderExistingGuesses = useMemo(
        () =>
            guesses.map((guess, index) => (
                <LetterRow key={index} guess={guess} complete />
            )),
        [guesses]
    )

    const renderCurrentGuess = useMemo(
        () => <LetterRow key={guesses.length + 1} guess={currentGuess} />,
        [currentGuess, guesses.length]
    )

    const renderEmptyGuesses = useMemo(
        () =>
            times(
                Math.max(0, TOTAL_CHANCES - (guesses.length + 1)),
                (rowIndex) => (
                    <LetterRow key={guesses.length + 2 + rowIndex} guess={''} />
                )
            ),
        [guesses.length]
    )

    return (
        <BoardContainer>
            {renderExistingGuesses}
            {renderCurrentGuess}
            {renderEmptyGuesses}
        </BoardContainer>
    )
}

export default WordleBoard
