import styled from 'styled-components';

export const StyledBreedInformation = styled.main`
    margin: 5rem 10rem;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 7rem;
    h1 {
        font-size: 3.2rem;
        font-weight: 500;
    }
    img {
        width: 100%;
        box-shadow: 1.5rem 1.5rem 0 black;
    }
    label {
        font-size: 1.2rem;
        color: var(--pink);
    }
    p {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        font-family: Poppins;
        font-size: 1.8rem;
        color: var(--gray);
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }
    h3 {
        font-size: 1.4rem;
        font-weight: 500;
    }
`;