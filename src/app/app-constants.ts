import { SpecialKeys, Locales } from 'enums'
import { GetWordOfTheDay, getMidnightStamp } from 'utils'

export const SEED_DATE = new Date(2022, 0, 1, 0, 0, 0, 0)
export const MIDNIGHT_STAMP = getMidnightStamp()

export const WORD_OF_THE_DAY = GetWordOfTheDay(new Date())

export const WORD_SIZE = 5
export const TOTAL_CHANCES = 6

export const QWERTY_LAYOUT = [
    'qwertyuiop',
    [null, 'asdfghjkl', null],
    [SpecialKeys.Enter, 'zxcvbnm', SpecialKeys.Backspace],
]

export const DEFAULT_LOCALE = Locales.en
