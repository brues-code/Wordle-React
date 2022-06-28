import { color } from 'styles/theme'

export default function getKeyColor(status?: boolean) {
    return status === undefined
        ? color.$DarkGrey2
        : status
        ? color.$DarkGreen1
        : color.$DarkYellow1
}
