import styled from 'styled-components';

export const StyledBreed = styled.a`

    outline: 1px solid black;
    text-decoration: none;
    transition: 0.3s;
    :hover {
        transform: scale(1.01);
        box-shadow: 1.5rem 1.5rem 0 black;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 25rem;
        outline: 1px solid black;
    }

    h1 {
        font-weight: 500;
        font-size: 2rem;
        color: black;
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--gray);
    }

    blockquote {
        padding: 1rem 2rem;
    }
`;