import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --pink: #ED6B86;
        --gray: #3D3D3D;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;

        @media (max-width: 1024px) {
            font-size: 8px;
        }

        @media (max-width: 768px) {
            font-size: 7px;
        }

        @media (max-width: 600px) {
            font-size: 6px;
        }

        @media (max-width: 440px) {
            font-size: 5px;
        }
        
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #FBFEF9;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
`;