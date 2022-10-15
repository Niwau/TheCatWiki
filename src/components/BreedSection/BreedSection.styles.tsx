import styled from 'styled-components';

export const StyledBreedSection = styled.section`

    margin: 12rem 10rem;
  

    > h1 {
        text-align: center;
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 4rem;
    }

    span {
        color: var(--pink);
    }

    > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
    }

`;