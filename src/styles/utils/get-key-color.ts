import { GuessType } from 'enums'

import { color } from 'styles/theme'

export default function getKeyColor(status?: GuessType) {
    switch (status) {
        case GuessType.Correct:
            return color.$DarkGreen1
        case GuessType.WrongIndex:
            return color.$DarkYellow1
        case GuessType.Invalid:
            return color.$DarkGrey2
        default:
            return color.$LightGrey1
    }
}
