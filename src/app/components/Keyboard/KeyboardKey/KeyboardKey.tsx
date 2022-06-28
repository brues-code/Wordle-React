import React, { useMemo } from 'react'

import { useApp } from 'app/context/AppContext'
import { GuessType, KeyCode } from 'enums'

import Icon from 'app/components/Icon'

import { KeyContainer } from './styles'

interface OwnProps {
    keyValue: string | KeyCode
    validStatus?: GuessType
}

const specialKeyRender = (keyValue: KeyCode) => {
    if (keyValue === KeyCode.Enter) {
        return 'enter'
    }
    return <Icon name="icon_backspace" />
}

const KeyboardKey: React.FC<OwnProps> = ({ keyValue, validStatus }) => {
    const { guesses, currentGuess } = useApp()

    const renderKeyValue = useMemo(() => {
        if (typeof keyValue === 'string') {
            return keyValue
        }
        return specialKeyRender(keyValue)
    }, [keyValue])

    return (
        <KeyContainer validStatus={validStatus}>{renderKeyValue}</KeyContainer>
    )
}

export default KeyboardKey
