import styled from 'styled-components';

export const StyledDidYouKnow = styled.article`

    margin: 0 10rem 20rem 10rem;
    padding: 2.5rem 5rem;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    background-color: white;
    box-shadow: 1.5rem 1.5rem 0 black;
    outline: 1px solid black;
    place-items: center;

    img {
        width: 100%;
    }

    h1 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    span {
        color: var(--pink);
    }

    p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2.2rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        img {
            width: 90%;
        }
    }

`;