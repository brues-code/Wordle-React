import React, { useMemo } from 'react'

import { useApp } from 'app/context/AppContext'
import { KeyCode } from 'enums'

import { KeyContainer } from './styles'

interface OwnProps {
    keyValue: string | KeyCode
}

const KeyboardKey: React.FC<OwnProps> = ({ keyValue }) => {
    const { guesses, currentGuess } = useApp()

    const isSpecialKey = useMemo(() => typeof keyValue !== 'string', [keyValue])

    return <KeyContainer>{keyValue}</KeyContainer>
}

export default KeyboardKey
