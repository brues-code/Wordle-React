import styled from 'styled-components'

export const LetterBorder = styled.div<{ hasChild: boolean }>`
    height: 62px;
    width: 62px;
    color: ${(props) => props.theme.color.$White};
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;

    border: 2px solid
        ${({ hasChild, theme: { color } }) =>
            hasChild ? color.$DarkGrey1 : color.$DarkGrey2};
`
