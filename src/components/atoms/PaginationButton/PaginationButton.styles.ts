import styled from 'styled-components';

export const Wrapper = styled.div<{variant?: 'pink'}>`
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
        
        color: ${props => props.variant == 'pink' ? 'white' : 'black'};
        background-color: ${props => props.variant == 'pink' ? 'var(--pink)' : 'white'};

    }
`;