import React, { FC, useCallback, useMemo } from 'react'

import { useApp } from 'app/context/AppContext'
import { GuessType, KeyCode } from 'enums'

import Icon from 'app/components/Icon'

import { KeyContainer } from './styles'

interface OwnProps {
    keyValue: string | KeyCode
    validStatus?: GuessType
}

const KeyboardKey: FC<OwnProps> = ({ keyValue, validStatus }) => {
    const { handleKeyCode } = useApp()

    const renderKeyValue = useMemo(() => {
        if (keyValue === KeyCode.Enter) {
            return 'enter'
        }
        if (keyValue === KeyCode.Backspace) {
            return <Icon name="icon_backspace" />
        }
        return keyValue
    }, [keyValue])

    const handleKeyClick = useCallback(
        () => handleKeyCode(keyValue),
        [handleKeyCode, keyValue]
    )

    return (
        <KeyContainer onClick={handleKeyClick} validStatus={validStatus}>
            {renderKeyValue}
        </KeyContainer>
    )
}

export default KeyboardKey
