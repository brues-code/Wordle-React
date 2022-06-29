import React, { FC, ReactNode, PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import AppContextProvider from 'app/context/AppContext'
import IntlContext from 'app/context/IntlContext'
import AppLayout from 'app/layouts/AppLayout'

import { color } from 'styles/theme'

const WithProviders: FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={{ color }}>
        <AppContextProvider>
            <IntlContext>
                <AppLayout>{children}</AppLayout>
            </IntlContext>
        </AppContextProvider>
    </ThemeProvider>
)

export default WithProviders
