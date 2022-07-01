import React, {
    createContext,
    FC,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'
import { some } from 'lodash'
import { useCookies } from 'react-cookie'
import { Cookie } from 'universal-cookie'
import { Cookies, SpecialKeys, Locales } from 'enums'

import {
    WORD_SIZE,
    DEFAULT_LOCALE,
    WORD_OF_THE_DAY,
    TOTAL_CHANCES,
    MIDNIGHT_STAMP,
} from 'app/app-constants'
import { isLetter, currentGuessIsValidWord } from 'utils'

interface State {
    gameFinished: boolean
    guesses: string[]
    currentGuess: string
    currentLocale: Locales
}

interface ApiProps {
    handleKeyCode: (keyCode: string) => void
}

type AppState = State & ApiProps

const initialState: AppState = {
    gameFinished: false,
    guesses: [],
    currentGuess: '',
    handleKeyCode: () => null,
    currentLocale: DEFAULT_LOCALE,
}

export const AppContext = createContext(initialState)

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cookies, setCookie] = useCookies()
    const [guesses, setGuesses] = useState<string[]>(
        cookies[Cookies.GUESSES] || initialState.guesses
    )
    const [currentLocale] = useState(
        cookies[Cookies.LOCALE] || initialState.currentLocale
    )
    const [currentGuess, setCurrentGuess] = useState('')

    const handleSetCookie = useCallback(
        (cookie: Cookies, value: Cookie) => {
            setCookie(cookie, value, { expires: MIDNIGHT_STAMP })
        },
        [setCookie]
    )

    const gameFinished = useMemo(
        () =>
            guesses.length === TOTAL_CHANCES ||
            some(guesses, (guess) => guess === WORD_OF_THE_DAY),
        [guesses]
    )

    const handleDelete = useCallback(
        () =>
            setCurrentGuess((prevState) =>
                prevState.slice(0, prevState.length - 1)
            ),
        []
    )

    const handleAddLetter = useCallback(
        (letter: string) => {
            if (currentGuess.length < WORD_SIZE) {
                setCurrentGuess((prevState) =>
                    prevState.concat(letter.toLowerCase())
                )
            }
        },
        [currentGuess]
    )

    const handleAddGuess = useCallback(() => {
        if (currentGuessIsValidWord(guesses, currentGuess)) {
            setGuesses((prevState) => {
                const newGuesses = prevState.concat(currentGuess)
                handleSetCookie(Cookies.GUESSES, newGuesses)
                return newGuesses
            })
            setCurrentGuess('')
        }
    }, [currentGuess, handleSetCookie, guesses])

    const handleKeyCode = useCallback(
        (key: string) => {
            if (key === SpecialKeys.Backspace) {
                handleDelete()
            } else if (key == SpecialKeys.Enter) {
                handleAddGuess()
            } else if (isLetter(key)) {
                handleAddLetter(key)
            }
        },
        [handleAddGuess, handleDelete, handleAddLetter]
    )

    const contextState: AppState = useMemo(
        () => ({
            currentGuess,
            currentLocale,
            guesses,
            handleKeyCode,
            gameFinished,
        }),
        [guesses, currentGuess, gameFinished, handleKeyCode, currentLocale]
    )

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)

export default AppContextProvider
