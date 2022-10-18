import styled from 'styled-components';

export const StyledCatsWrapper = styled.main`
    margin: 4rem 10rem;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 4rem;

    @media (max-width: 1366px) {
        grid-template-columns: repeat(4,1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 319px) {
        grid-template-columns: repeat(1,1fr);
    }
`;