import styled from 'styled-components';

interface IconProps {
    width?: string;
    height?: string;
    fill?: string;
}

interface IconContainerProps {
    display?: string;
    className?: string;
    onClick?: Function;
}

export const StyledIcon = styled.svg<IconProps>`
    fill: ${props => props.fill || 'currentColor'};
    width: ${props => props.width || '18px'};
    height: ${props => props.height || '18px'};
`;

export const StyledIconContainer = styled.div<IconContainerProps>`
    width: fit-content;
    height: fit-content;
    &.pointer {
        cursor: pointer;
    }
    display: ${props => props.display || 'flex'};
    ${props => props.onClick && `cursor: pointer;`}
`;
