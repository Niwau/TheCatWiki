import styled from 'styled-components';

interface CardProps {
    variant: 'pink' | 'white'
}

export const StyledCard = styled.div<CardProps>`

    background-color: ${ props => (props.variant == 'pink') ? 'var(--pink)' : 'white' };
    outline: 1px solid black;
    transition: 0.3s ease;
    padding: 2.5rem 1.5rem;

    :hover {
        box-shadow: 1rem 1rem 0 black;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${ props => (props.variant == 'pink') ? 'white' : 'black' };
    }

    p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: ${ props => (props.variant == 'pink') ? 'white' : 'var(--gray)' };
    }

`;