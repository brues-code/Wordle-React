import React, { useCallback, useMemo } from 'react'

import { QWERTY_LAYOUT } from 'app/app-constants'
import { validateKeys } from 'utils/word-validation'
import { KeyCode } from 'enums'

import { useApp } from 'app/context/AppContext'
import KeyboardKey from './KeyboardKey'

import { KeyboardContainer, KeyboardRow, KeyBoardSpacer } from './styles'

const Keyboard: React.FC = () => {
    const { guesses } = useApp()

    const validatedKeys = useMemo(() => validateKeys(guesses), [guesses])

    const renderKey = useCallback(
        (key: string | KeyCode) => (
            <KeyboardKey
                key={key}
                keyValue={key}
                validStatus={validatedKeys[key]}
            />
        ),
        [validatedKeys]
    )

    const renderRow = useCallback(
        (row: string) => row.split('').map(renderKey),
        [renderKey]
    )

    const renderTopRow = useMemo(
        () => <KeyboardRow>{renderRow(QWERTY_LAYOUT[0])}</KeyboardRow>,
        [renderRow]
    )

    const renderMiddleRow = useMemo(
        () => (
            <KeyboardRow>
                <KeyBoardSpacer />
                {renderRow(QWERTY_LAYOUT[1])}
                <KeyBoardSpacer />
            </KeyboardRow>
        ),
        [renderRow]
    )

    const renderBottomRow = useMemo(
        () => (
            <KeyboardRow>
                {renderKey(KeyCode.Enter)}
                {renderRow(QWERTY_LAYOUT[2])}
                {renderKey(KeyCode.Backspace)}
            </KeyboardRow>
        ),
        [renderRow, renderKey]
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
