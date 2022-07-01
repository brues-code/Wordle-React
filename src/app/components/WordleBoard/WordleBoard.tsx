import React, { useMemo } from 'react'
import { times } from 'lodash'

import { TOTAL_CHANCES } from 'app/app-constants'

import { useApp } from 'app/context/AppContext'
import LetterRow from 'app/components/LetterRow'
import MidnightCountdown from 'app/components/MidnightCountdown'

import { BoardContainer, BoardContent, BoardWrapper } from './styles'

const WordleBoard: React.FC = () => {
    const { guesses, currentGuess, gameFinished } = useApp()

    const renderExistingGuesses = useMemo(
        () =>
            guesses.map((guess, index) => (
                <LetterRow key={index} guess={guess} complete />
            )),
        [guesses]
    )

    const renderCurrentGuess = useMemo(
        () => !gameFinished && <LetterRow key="current" guess={currentGuess} />,
        [currentGuess, gameFinished]
    )

    const renderEmptyGuesses = useMemo(
        () =>
            times(
                TOTAL_CHANCES - (guesses.length + (gameFinished ? 0 : 1)),
                (rowIndex) => <LetterRow key={'empty' + rowIndex} />
            ),
        [guesses.length, gameFinished]
    )

    const renderMidnightCountdown = useMemo(
        () => gameFinished && <MidnightCountdown />,
        [gameFinished]
    )

    return (
        <BoardWrapper>
            <BoardContent>
                {renderMidnightCountdown}
                <BoardContainer>
                    {renderExistingGuesses}
                    {renderCurrentGuess}
                    {renderEmptyGuesses}
                </BoardContainer>
            </BoardContent>
        </BoardWrapper>
    )
}

export default WordleBoard
