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
import { times } from 'lodash'

import { Guesses } from 'types/guesses'

import { GetWordOfTheDay } from 'utils/todays_word'
import { WORD_SIZE } from '../app-constants'

interface State {
    wordOfTheDay: string
    guesses: Guesses
}

interface ApiProps {
    setGuesses: (guesses: Guesses) => void
}

type AppState = State & ApiProps

const initialState: AppState = {
    wordOfTheDay: '',
    guesses: [],
    setGuesses: () => null,
}

export const AppContext = createContext(initialState)

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const wordOfTheDay = useMemo(() => GetWordOfTheDay(new Date()), [])
    const [guesses, setGuesses] = useState<Guesses>([])

    const handleDelete = useCallback(
        () =>
            setGuesses((prevState) => {
                if (prevState.length % WORD_SIZE === 0) {
                    return prevState
                }
                return prevState.slice(0, prevState.length - 1)
            }),
        []
    )
    const handleUserKeyPress = useCallback(
        (event: Event) => {
            const charCode = event['keyCode']
            if (charCode > 64 && charCode < 91) {
                setGuesses((prevState) =>
                    prevState.concat(String(event['key']).toUpperCase())
                )
            }
            if (charCode === 8) {
                handleDelete()
            }
        },
        [handleDelete]
    )
    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress)

        return () => window.removeEventListener('keydown', handleUserKeyPress)
    }, [handleUserKeyPress])

    const contextState: AppState = useMemo(
        () => ({
            wordOfTheDay,
            guesses,
            setGuesses,
        }),
        [wordOfTheDay, guesses, setGuesses]
    )

    return (
        <AppContext.Provider value={contextState}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)

export default AppContextProvider
