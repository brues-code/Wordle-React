import React, {
    createContext,
    FC,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { some } from 'lodash'
import { useCookies } from 'react-cookie'
import { Cookie } from 'universal-cookie'
import { Cookies, KeyCode, Locales } from 'enums'

import { WORD_SIZE, DEFAULT_LOCALE } from 'app/app-constants'
import { WORD_OF_THE_DAY } from 'utils/todays_word'
import checkIsValidWord from 'utils/valid-word'
import getMidnightStamp from 'utils/get-midnight-stamp'

interface State {
    solutionFound: boolean
    guesses: string[]
    currentGuess: string
    currentLocale: Locales
}

interface ApiProps {
    handleKeyCode: (keyCode: KeyCode) => void
}

type AppState = State & ApiProps

const initialState: AppState = {
    solutionFound: false,
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
            setCookie(cookie, value, { expires: getMidnightStamp() })
        },
        [setCookie]
    )

    const solutionFound = useMemo(
        () => some(guesses, (guess) => guess === WORD_OF_THE_DAY),
        [guesses]
    )

    const currentGuessIsValidWord = useCallback(
        () =>
            WORD_OF_THE_DAY === currentGuess ||
            (currentGuess.length === WORD_SIZE &&
                !guesses.includes(currentGuess) &&
                checkIsValidWord(currentGuess)),
        [currentGuess, guesses]
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
                setCurrentGuess((prevState) => prevState.concat(letter))
            }
        },
        [currentGuess]
    )

    const handleAddGuess = useCallback(() => {
        if (currentGuessIsValidWord()) {
            setGuesses((prevState) => {
                const newGuesses = prevState.concat(currentGuess)
                handleSetCookie(Cookies.GUESSES, newGuesses)
                return newGuesses
            })
            setCurrentGuess('')
        }
    }, [currentGuessIsValidWord, currentGuess, handleSetCookie])

    const handleKeyCode = useCallback(
        (charCode: KeyCode) => {
            if (solutionFound) {
                return
            }
            if (charCode === KeyCode.Backspace) {
                handleDelete()
            } else if (charCode == KeyCode.Enter) {
                handleAddGuess()
            } else if (charCode >= KeyCode.KeyA && charCode <= KeyCode.KeyZ) {
                handleAddLetter(String.fromCharCode(charCode).toLowerCase())
            }
        },
        [solutionFound, handleAddGuess, handleDelete, handleAddLetter]
    )

    const handleUserKeyPress = useCallback(
        (event: Event) => {
            if (solutionFound) {
                window.removeEventListener('keydown', handleUserKeyPress)
                return
            }
            handleKeyCode(event['keyCode'] as KeyCode)
        },
        [handleKeyCode, solutionFound]
    )
    useEffect(() => {
        if (!solutionFound) {
            window.addEventListener('keydown', handleUserKeyPress)
        }
        return () => window.removeEventListener('keydown', handleUserKeyPress)
    }, [handleUserKeyPress, solutionFound])

    const contextState: AppState = useMemo(
        () => ({
            currentGuess,
            currentLocale,
            guesses,
            handleKeyCode,
            solutionFound,
        }),
        [guesses, currentGuess, solutionFound, handleKeyCode, currentLocale]
    )

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)

export default AppContextProvider
