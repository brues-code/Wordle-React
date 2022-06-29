import React from 'react'

import Providers from 'app/context/Providers'

import Wordle from 'app/Wordle'

const App = () => (
    <Providers>
        <Wordle />
    </Providers>
)

export default App
