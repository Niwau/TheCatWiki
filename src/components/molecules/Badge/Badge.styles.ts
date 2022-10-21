import styled from 'styled-components';

export const StyledBadge = styled.a`
  display: grid;
  width: fit-content;
  grid-template-columns: 4rem 18rem;
  gap: 1rem;
  margin: 1rem 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 5rem;
  }
  h1 {
    font-size: 1.2rem;
    color: black;
  }
  h3 {
    font-size: 1rem;
    color: var(--pink);
    font-weight: 500;
  }
  
`;