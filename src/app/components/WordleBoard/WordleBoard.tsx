import React, { useMemo } from 'react'
import { times } from 'lodash'

import LetterRow from 'app/components/LetterRow'

import { BoardContainer } from './styles'
import { TOTAL_CHANCES } from 'app/app-constants'

const WordleBoard: React.FC = () => {
    return (
        <BoardContainer>
            {times(TOTAL_CHANCES, (rowIndex) => (
                <LetterRow key={rowIndex} rowIndex={rowIndex} />
            ))}
        </BoardContainer>
    )
}

export default WordleBoard
