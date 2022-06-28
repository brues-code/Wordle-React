import styled from 'styled-components'

import { GuessType } from 'enums'

import getKeyColor from 'styles/utils/get-key-color'

export const LetterBorder = styled.div<{
    hasChild: boolean
    verifyStatus: GuessType | undefined
    rowComplete?: boolean
    index: number
}>`
    height: ${(props) => (props.rowComplete ? 62 : 58)}px;
    width: ${(props) => (props.rowComplete ? 62 : 58)}px;

    align-items: center;
    color: ${(props) => props.theme.color.$White};
    display: inline-flex;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    text-transform: uppercase;
    transition: background-color 1000ms linear;
    user-select: none;
    vertical-align: middle;

    @keyframes rollout {
        from {
            transform: rotaxeX(0);
        }
        50% {
            transform: rotateX(-90deg);
        }
        to {
            transform: rotaxeX(0);
        }
    }

    ${({ rowComplete, index, hasChild, theme: { color }, verifyStatus }) =>
        rowComplete
            ? `animation: rollout ${0.4 + index * 0.3}s;
            background-color: ${getKeyColor(verifyStatus)};`
            : `border: 2px solid ${
                  hasChild ? color.$DarkGrey1 : color.$DarkGrey2
              };`}
`
