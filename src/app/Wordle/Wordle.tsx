import React, { useMemo } from 'react'

import { useApp } from 'app/context/AppContext'

import AppLayout from 'app/layouts/AppLayout'
import WordleBoard from 'app/components/WordleBoard'
import Keyboard from 'app/components/Keyboard'

const Wordle = () => {
    const { gameFinished } = useApp()

    const renderKeyBoard = useMemo(
        () => !gameFinished && <Keyboard />,
        [gameFinished]
    )

    return (
        <AppLayout>
            <WordleBoard />
            {renderKeyBoard}
        </AppLayout>
    )
}
export default Wordle
