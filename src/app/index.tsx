import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppContextProvider from 'app/context/AppContext'

import Wordle from 'app/Wordle'

import { color } from 'styles/theme'

const App = () => (
    <ThemeProvider theme={{ color }}>
        <AppContextProvider>
            <Wordle />
        </AppContextProvider>
    </ThemeProvider>
)

export default App
