import styled from 'styled-components';

interface StyledButtonProps {
    variant: 'pink' | 'white'
}

export const StyledButton = styled.a<StyledButtonProps>`
    outline: 1px solid black;
    font-size: 1.6rem;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;
    color: ${ props => (props.variant == 'pink') ? 'white' : 'black' };
    background-color: ${ props => (props.variant == 'pink') ? 'var(--pink)' : 'white' };

    :hover {
        box-shadow: 0.5rem 0.5rem 0 black;
    }
`;