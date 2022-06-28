import styled from 'styled-components'

export const BoardContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 5px;
`

export const BoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
`
