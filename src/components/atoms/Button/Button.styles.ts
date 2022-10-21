import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.a<ButtonProps>`
    outline: 1px solid black;
    font-size: 1.6rem;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;
    color: ${ ({variant}) => (variant == 'primary') ? 'white' : 'black' };
    background-color: ${ ({variant}) => (variant == 'primary') ? 'var(--pink)' : 'white' };

    :hover {
        box-shadow: 0.5rem 0.5rem 0 black;
    }
`;