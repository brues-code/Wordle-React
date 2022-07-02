import { Guesses } from './guesses'

export interface GameState {
    guesses: Guesses
    expiry: number
}
