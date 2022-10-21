import styled from 'styled-components';

export const StyledSearchBar = styled.div`

    width: fit-content;
    position: relative;

    > div {
        display: flex;
        align-items: center;
    }

    svg {
        font-size: 2rem;
        position: absolute;
        right: 1rem;
    }

    input {
        width: 20rem;
        border: 1px solid black;
        padding: 0.5rem 3rem 0.5rem 1.5rem;
        outline: none;
    }

    footer {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        margin-top: 1rem;
        position: absolute;
        max-height: 20rem;
        padding: 1.2rem;
        background-color: white;
        outline: 1px solid black;
    }
`;