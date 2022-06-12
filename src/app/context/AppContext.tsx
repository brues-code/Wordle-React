import React, {
    createContext,
    FC,
    useContext,
    useMemo,
    PropsWithChildren,
    useState,
    useEffect,
    useCallback,
} from 'react'

import { Guesses } from 'types/guesses'

import { WORD_OF_THE_DAY } from 'utils/todays_word'
import checkIsValidWord from 'utils/valid-word'
import { WORD_SIZE } from 'app/app-constants'

interface State {
    guesses: Guesses
}

interface ApiProps {
    setGuesses: (guesses: Guesses) => void
}

type AppState = State & ApiProps

const initialState: AppState = {
    guesses: [],
    setGuesses: () => null,
}

export const AppContext = createContext(initialState)

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [guesses, setGuesses] = useState<Guesses>([])

    const solutionFound = useMemo(
        () =>
            guesses.length % WORD_SIZE === 0 &&
            guesses.slice(-5).join('') === WORD_OF_THE_DAY,
        [guesses]
    )

    const isValidWord = useMemo(() => {
        if (guesses.length % WORD_SIZE === 0) {
            return checkIsValidWord(guesses.slice(-WORD_SIZE).join(''))
        }
        return false
    }, [guesses])

    const handleDelete = useCallback(
        () =>
            !isValidWord &&
            setGuesses((prevState) => prevState.slice(0, prevState.length - 1)),
        [isValidWord]
    )

    const handleAddGuess = useCallback(
        (guess: string) => {
            if (
                !solutionFound &&
                (guesses.length === 0 ||
                    guesses.length % WORD_SIZE !== 0 ||
                    isValidWord)
            ) {
                setGuesses((prevState) => prevState.concat(guess))
            }
        },
        [guesses, isValidWord, solutionFound]
    )

    const handleUserKeyPress = useCallback(
        (event: Event) => {
            const charCode = event['keyCode']
            if (charCode > 64 && charCode < 91) {
                handleAddGuess(String(event['key'].toLowerCase()))
            }
            if (charCode === 8) {
                handleDelete()
            }
        },
        [handleDelete, handleAddGuess]
    )
    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress)

        return () => window.removeEventListener('keydown', handleUserKeyPress)
    }, [handleUserKeyPress])

    const contextState: AppState = useMemo(
        () => ({
            guesses,
            setGuesses,
        }),
        [guesses, setGuesses]
    )

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)

export default AppContextProvider
