import React, { useMemo } from 'react'
import { times } from 'lodash'

import { TOTAL_CHANCES } from 'app/app-constants'

import { useApp } from 'app/context/AppContext'
import LetterRow from 'app/components/LetterRow'

import { BoardContainer, BoardWrapper } from './styles'

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
        <BoardWrapper>
            <BoardContainer>
                {renderExistingGuesses}
                {renderCurrentGuess}
                {renderEmptyGuesses}
            </BoardContainer>
        </BoardWrapper>
    )
}

export default WordleBoard
