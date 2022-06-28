import styled from 'styled-components'

export const KeyContainer = styled.button`
    align-items: center;
    background-color: ${(props) => props.theme.color.$LightGrey1};
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
