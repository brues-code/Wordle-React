import React, { FC, useMemo } from 'react'

import { useApp } from 'app/context/AppContext'
import { GuessType, SpecialKeys } from 'enums'

import Icon from 'app/components/Icon'

import { KeyContainer } from './styles'

interface OwnProps {
    keyValue: string
    validStatus?: GuessType
}

const KeyboardKey: FC<OwnProps> = ({ keyValue, validStatus }) => {
    const { handleKeyCode } = useApp()

    const handleKeyClick = () => handleKeyCode(keyValue)

    const renderKeyValue = useMemo(() => {
        if (keyValue === SpecialKeys.Backspace) {
            return <Icon name="icon_backspace" />
        }
        return keyValue
    }, [keyValue])

    return (
        <KeyContainer onClick={handleKeyClick} validStatus={validStatus}>
            {renderKeyValue}
        </KeyContainer>
    )
}

export default KeyboardKey
