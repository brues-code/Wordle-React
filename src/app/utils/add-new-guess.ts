import { last } from 'lodash'
import { Guesses } from 'types/guesses'

import { WORD_SIZE } from 'app/app-constants'

const AddNewGuess = (currentGuesses: Guesses, guess: string): Guesses => {
    return currentGuesses.concat(guess)
}

export default AddNewGuess
