import styled from 'styled-components'

export const OutsideWrapper = styled.div`
    background-color: ${(props) => props.theme.color.$Black1};
    background-size: cover;
    display: table;
    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

export const MiddleWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
`

export const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    text-align: center;
    width: 100%;
`
