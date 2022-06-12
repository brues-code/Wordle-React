import styled from 'styled-components'

export const LetterBorder = styled.div<{
    hasChild: boolean
    verifyStatus: boolean | undefined
    rowComplete: boolean
    index: number
}>`
    height: 62px;
    width: 62px;
    color: ${(props) => props.theme.color.$White};
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    vertical-align: middle;
    text-transform: uppercase;
    user-select: none;
    animation-duration: 250ms;
    animation-timing-function: ease-in;

    @keyframes rollout {
        0% {
            transform: rotaxeX(0);
        }
        100% {
            transform: rotateX(-90deg);
        }
    }

    @keyframes rollin {
        0% {
            transform: rotateX(-90deg);
        }
        100% {
            transform: rotaxeX(0);
        }
    }

    ${({ rowComplete, index, hasChild, theme: { color }, verifyStatus }) =>
        rowComplete
            ? `animation: rollout ${0.4 + index * 0.3}s;
            
            background-color: ${
                verifyStatus === undefined
                    ? color.$DarkGrey2
                    : verifyStatus
                    ? color.$DarkGreen1
                    : color.$DarkYellow1
            };`
            : `border: 2px solid ${
                  hasChild ? color.$DarkGrey1 : color.$DarkGrey2
              };`}
`
