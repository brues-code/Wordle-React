import styled from 'styled-components'

export const OutsideWrapper = styled.div`
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.color.$Black1};
    background-size: cover;
`

export const MiddleWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
`

export const InnerContent = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 675px;
    max-width: 100vw;
    text-align: center;
`
