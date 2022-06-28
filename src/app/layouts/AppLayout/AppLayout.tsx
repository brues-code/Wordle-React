import React, { PropsWithChildren } from 'react'

import { InnerContent, MiddleWrapper, OutsideWrapper } from './styles'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <OutsideWrapper>
        <MiddleWrapper>
            <InnerContent>{children}</InnerContent>
        </MiddleWrapper>
    </OutsideWrapper>
)

export default AppLayout
