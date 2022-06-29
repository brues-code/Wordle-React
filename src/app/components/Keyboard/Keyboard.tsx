import React, { useCallback, useMemo, FC } from 'react'

import { QWERTY_LAYOUT } from 'app/app-constants'
import { validateKeys } from 'utils/word-validation'
import { KeyCode } from 'enums'

import { useApp } from 'app/context/AppContext'
import KeyboardKey from './KeyboardKey'

import { KeyboardContainer, KeyboardRow, KeyBoardSpacer } from './styles'

const Keyboard: FC = () => {
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
                              } else if (typeof keys === 'string') {
                                  return renderLetters(keys)
                              } else {
                                  return renderKey(keys)
                              }
                          })}
                </KeyboardRow>
            )),
        [renderKey, renderLetters]
    )

    return <KeyboardContainer>{renderRows}</KeyboardContainer>
}

export default Keyboard
