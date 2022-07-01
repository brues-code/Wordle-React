import React, { useCallback, useMemo } from 'react'
import useEventListener from '@use-it/event-listener'

import { QWERTY_LAYOUT } from 'app/app-constants'
import { validateKeys } from 'utils'
import { KeyCode } from 'enums'

import { useApp } from 'app/context/AppContext'
import KeyboardKey from './KeyboardKey'

import { KeyboardContainer, KeyboardRow, KeyBoardSpacer } from './styles'

const Keyboard = () => {
    const { guesses, handleKeyCode } = useApp()

    const validatedKeys = useMemo(() => validateKeys(guesses), [guesses])

    useEventListener('keydown', ({ key }: KeyboardEvent) => handleKeyCode(key))

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

    const renderLetters = useCallback(
        (row: string) => row.split('').map(renderKey),
        [renderKey]
    )

    const renderRows = useMemo(
        () =>
            QWERTY_LAYOUT.map((row, index) => (
                <KeyboardRow key={index}>
                    {typeof row === 'string'
                        ? renderLetters(row)
                        : row.map((keys, index) => {
                              if (!keys) {
                                  return <KeyBoardSpacer key={index} />
                              } else if (KeyCode[keys]) {
                                  return renderKey(keys)
                              } else {
                                  return renderLetters(keys)
                              }
                          })}
                </KeyboardRow>
            )),
        [renderKey, renderLetters]
    )

    return <KeyboardContainer>{renderRows}</KeyboardContainer>
}

export default Keyboard
