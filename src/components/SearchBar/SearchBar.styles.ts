import styled from 'styled-components';

export const StyledSearchBar = styled.div`

    > div {
        display: flex;
        align-items: center;
    }

    svg {
        font-size: 2rem;
        position: relative;
        right: -21rem;
    }

    input {
        border: 1px solid black;
        padding: 0.5rem 3rem 0.5rem 1.5rem;
        outline: none;
    }

    footer {
        margin-top: 1rem;
        margin-left: 2.1rem;
        position: absolute;
        max-height: 20rem;
        overflow: auto;
        padding: 1.2rem;
        background-color: white;
        outline: 1px solid black;
    }
`;