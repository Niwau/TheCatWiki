import styled from 'styled-components';

export const StyledBreedInformation = styled.main`
    margin: 5rem 10rem 10rem 10rem;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 7rem;
    outline: 1px solid black;
    padding: 5rem;
    h1 {
        font-size: 3.2rem;
        font-weight: 500;
    }
    img {
        width: 80%;
        box-shadow: 1.5rem 1.5rem 0 black;
    }
    label {
        font-size: 1.5rem;
        color: var(--pink);
    }
    p {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        font-family: Poppins;
        font-size: 1.8rem;
        color: var(--gray);
        font-weight: 300;
        line-height: 2.4rem;
    }
    h3 {
        font-size: 1.4rem;
        font-weight: 500;
    }
    h6 {
        background-color: red;
    }
    @media(max-width: 600px){
        grid-template-columns: 1fr;
        img {
            width: 50%;
        }
    }
`;