import React, { useMemo } from 'react'

import { useApp } from 'app/context/AppContext'

import AppLayout from 'app/layouts/AppLayout'
import WordleBoard from 'app/components/WordleBoard'
import Keyboard from 'app/components/Keyboard'

const Wordle = () => {
    const { solutionFound } = useApp()

    const renderKeyBoard = useMemo(
        () => !solutionFound && <Keyboard />,
        [solutionFound]
    )

    return (
        <AppLayout>
            <WordleBoard />
            {renderKeyBoard}
        </AppLayout>
    )
}
export default Wordle
