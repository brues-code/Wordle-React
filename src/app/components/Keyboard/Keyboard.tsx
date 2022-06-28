import React, { useMemo } from 'react'

import { QWERTY_LAYOUT } from 'app/app-constants'

import { useApp } from 'app/context/AppContext'

import { KeyboardContainer, KeyboardRow } from './styles'

const Keyboard: React.FC = () => {
    const { guesses, currentGuess } = useApp()

    return (
        <KeyboardContainer>
            {QWERTY_LAYOUT.map((row, index) => (
                <KeyboardRow key={index}>
                    {row.split('').map((r) => r)}
                </KeyboardRow>
            ))}
        </KeyboardContainer>
    )
}

export default Keyboard
