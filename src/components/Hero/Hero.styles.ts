import styled from 'styled-components';

export const StyledHero = styled.section`

    outline: 1px solid black;
    padding: 5rem 3.5rem;
    margin: 0 10rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    justify-content: space-between;
    align-items: center;

    img {
        width: 100%;
        outline: 1px solid black;
        box-shadow: 1.5rem 1.5rem 0 black;
    }

    span {
        color: var(--pink)
    }

    h1 {
        font-size: 4.8rem;
        font-weight: 500;
        line-height: 6.3rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: var(--gray);
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        footer {
            display: flex;
            gap: 1.5rem;
            
        }

    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        place-items: center;
        img {
            width:90%;
        }
    }

    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        img {
                width:90%;
        }
    }

`;