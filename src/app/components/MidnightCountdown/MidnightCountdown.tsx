import React, { useCallback, useMemo } from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'

import getMidnightStamp from 'utils/get-midnight-stamp'

import { CountdownContainer } from './styles'

const MidnightCountdown: React.FC = () => {
    const midnightStamp = useMemo(getMidnightStamp, [])

    const renderer: CountdownRendererFn = useCallback(
        ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                return <span>Refresh the page to load a new game!</span>
            }
            return (
                <span>
                    New game in {hours}:{minutes}:{seconds}
                </span>
            )
        },
        []
    )

    return (
        <CountdownContainer>
            <Countdown date={midnightStamp} renderer={renderer} />
        </CountdownContainer>
    )
}

export default MidnightCountdown
