import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppContextProvider from 'app/context/AppContext'

import WordleBoard from 'app/components/WordleBoard'

import { color } from 'styles/theme'
import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles'

const App = () => (
    <ThemeProvider theme={{ color }}>
        <AppContextProvider>
            <OutsideWrapper>
                <MiddleWrapper>
                    <InnerContent>
                        <WordleBoard />
                    </InnerContent>
                </MiddleWrapper>
            </OutsideWrapper>
        </AppContextProvider>
    </ThemeProvider>
)

export default App
