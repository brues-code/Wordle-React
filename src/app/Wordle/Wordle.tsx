import React from 'react'

import AppLayout from 'app/layouts/AppLayout'
import WordleBoard from 'app/components/WordleBoard'
import Keyboard from 'app/components/Keyboard'

const Wordle = () => (
    <AppLayout>
        <WordleBoard />
        <Keyboard />
    </AppLayout>
)

export default Wordle
