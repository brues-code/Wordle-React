import styled from 'styled-components'

import getKeyColor from 'styles/utils/get-key-color'

export const KeyContainer = styled.button<{ validStatus?: boolean }>`
    align-items: center;
    background-color: ${({ validStatus }) => getKeyColor(validStatus)};
    border-radius: 4px;
    border: 0;
    color: ${(props) => props.theme.color.$White};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-weight: bold;
    height: 58px;
    justify-content: center;
    margin: 0 6px 0 0;
    padding: 0;
    text-transform: uppercase;
    user-select: none;
`
