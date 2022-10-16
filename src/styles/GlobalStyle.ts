import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --pink: #ED6B86;
        --gray: #3D3D3D;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
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