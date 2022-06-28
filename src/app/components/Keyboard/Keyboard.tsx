import React, { useCallback, useMemo } from 'react'

import { QWERTY_LAYOUT } from 'app/app-constants'
import { validateKeys } from 'utils/word-validation'

import { useApp } from 'app/context/AppContext'
import KeyboardKey from './KeyboardKey'

import { KeyboardContainer, KeyboardRow } from './styles'
import { KeyCode } from '../../../enums'

const Keyboard: React.FC = () => {
    const { guesses } = useApp()

    const validatedKeys = useMemo(() => validateKeys(guesses), [guesses])

    const renderRow = useCallback(
        (row: string) =>
            row.split('').map((key) => {
                return (
                    <KeyboardKey
                        key={key}
                        keyValue={key}
                        validStatus={validatedKeys[key]}
                    />
                )
            }),
        [validatedKeys]
    )

    const renderTopRow = useMemo(
        () => <KeyboardRow>{renderRow(QWERTY_LAYOUT[0])}</KeyboardRow>,
        [renderRow]
    )

    const renderMiddleRow = useMemo(
        () => <KeyboardRow>{renderRow(QWERTY_LAYOUT[1])}</KeyboardRow>,
        [renderRow]
    )

    const renderBottomRow = useMemo(
        () => (
            <KeyboardRow>
                <KeyboardKey keyValue={KeyCode.Enter} />
                {renderRow(QWERTY_LAYOUT[2])}
                <KeyboardKey keyValue={KeyCode.Backspace} />
            </KeyboardRow>
        ),
        [renderRow]
    )

    return (
        <KeyboardContainer>
            {renderTopRow}
            {renderMiddleRow}
            {renderBottomRow}
        </KeyboardContainer>
    )
}

export default Keyboard
