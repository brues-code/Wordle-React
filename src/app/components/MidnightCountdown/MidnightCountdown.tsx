import React, { useCallback } from 'react'
import Countdown, { CountdownRendererFn } from 'react-countdown'
import { useIntl } from 'react-intl'

import { MIDNIGHT_STAMP } from 'app/app-constants'
import { formatNumberToTime } from 'utils'

import { CountdownContainer } from './styles'

const MidnightCountdown = () => {
    const { formatMessage } = useIntl()

    const renderer: CountdownRendererFn = useCallback(
        ({ hours, minutes, seconds, completed }) => (
            <span>
                {completed
                    ? formatMessage({ id: 'countdown.complete' })
                    : formatMessage(
                          { id: 'countdown.remainingTime' },
                          {
                              hours: formatNumberToTime(hours),
                              minutes: formatNumberToTime(minutes),
                              seconds: formatNumberToTime(seconds),
                          }
                      )}
            </span>
        ),
        [formatMessage]
    )

    return (
        <CountdownContainer>
            <Countdown date={MIDNIGHT_STAMP} renderer={renderer} />
        </CountdownContainer>
    )
}

export default MidnightCountdown
