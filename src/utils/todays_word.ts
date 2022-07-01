import { SEED_DATE } from 'app/app-constants'
import words from './words.json'

const GetWordIndex = (seed: Date, dateToRetrieve: Date) =>
    Math.round(
        (new Date(dateToRetrieve).setHours(0, 0, 0, 0) -
            new Date(seed).setHours(0, 0, 0, 0)) /
            (1000 * 60 * 60 * 24)
    )

const GetWordIndexForDate = (dateToRetrieve: Date) =>
    GetWordIndex(SEED_DATE, dateToRetrieve)

export const GetWordOfTheDay = (dateToRetrieve: Date) =>
    words[GetWordIndexForDate(dateToRetrieve) % words.length]
