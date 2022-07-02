import { LocalStorage } from 'enums'
import { GameState } from 'types/game-state'
import { Guesses } from 'types/guesses'
import { MIDNIGHT_STAMP } from 'app/app-constants'

export function setStorageGuesses(guesses: Guesses) {
    const item: GameState = {
        guesses,
        expiry: MIDNIGHT_STAMP.getTime(),
    }
    localStorage.setItem(LocalStorage.GAME_STATE, JSON.stringify(item))
}

export function getStorageGuesses(): Guesses {
    const itemStr = localStorage.getItem(LocalStorage.GAME_STATE)
    if (!itemStr) {
        return []
    }
    const gameState: GameState = JSON.parse(itemStr)
    const now = new Date().setHours(0, 0, 0, 0)
    if (now > gameState.expiry) {
        localStorage.removeItem(LocalStorage.GAME_STATE)
        return []
    }
    return gameState.guesses
}
