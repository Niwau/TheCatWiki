import styled from 'styled-components';

export const StyledBenefits = styled.section`

    margin: 5rem 10rem;

    blockquote {
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    blockquote > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.8rem;
        margin-bottom: 1.6rem;
    }

    span {
        color: var(--pink);
    }

    blockquote > p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: var(--gray);
    }

    footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
        justify-content: center;
    }

    @media (max-width: 425px) {
        footer {
            grid-template-columns: 40rem;

        }
    }

`;