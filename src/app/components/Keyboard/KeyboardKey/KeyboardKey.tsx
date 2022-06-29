import React, { useCallback, useMemo, FC } from 'react'

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

const KeyboardKey: FC<OwnProps> = ({ keyValue, validStatus }) => {
    const { handleKeyCode } = useApp()

    const renderKeyValue = useMemo(() => {
        if (typeof keyValue === 'string') {
            return keyValue
        }
        return specialKeyRender(keyValue)
    }, [keyValue])

    const handleKeyClick = useCallback(() => {
        handleKeyCode(
            typeof keyValue === 'string'
                ? keyValue.charCodeAt(0) - 32
                : keyValue
        )
    }, [handleKeyCode, keyValue])

    return (
        <KeyContainer onClick={handleKeyClick} validStatus={validStatus}>
            {renderKeyValue}
        </KeyContainer>
    )
}

export default KeyboardKey
