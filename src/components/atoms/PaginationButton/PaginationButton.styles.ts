import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-block;
    width: fit-content;
    > a {
        outline: 1px solid black;
        font-size: 2rem;
        padding: 0.5rem 1.5rem;
        border: none;
        font-weight: 600;
        text-decoration: none;
        transition: 0.3s ease;
        color: black;
        background-color: white;
    }

    > a.active {
        background-color: var(--pink);
        color: white;
    }
`;