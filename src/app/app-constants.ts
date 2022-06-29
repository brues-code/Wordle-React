import { KeyCode } from 'enums'

export const SEED_DATE = new Date(2022, 4, 6, 0, 0, 0, 0)

export const WORD_SIZE = 5
export const TOTAL_CHANCES = 6

export const QWERTY_LAYOUT = [
    'qwertyuiop',
    [null, 'asdfghjkl', null],
    [KeyCode.Enter, 'zxcvbnm', KeyCode.Backspace],
]
