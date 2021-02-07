import { createGlobalStyle } from "styled-components";
import resetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
    html {
        --color-dark: #656565;
        --color-light: #f6f6f6;
        --color-dark-contrast: var(--color-light);
        --color-light-contrast: var(--color-dark);
        --color-dark-hover: #4d4d4d;
        --color-light-hover: #ededed;
        --color-gray: rgba(0,0,0, 0.5);
        --color-gray-contrast: var(--color-light);
        --color-primary: #ff6358;
        --color-primary-rgb: 255,99,88;
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #ff6358;
        --color-secondary: #03a9f4;
        --color-secondary-rgb: 3,169,244;
        --color-secondary-contrast: var(--color-light);
        --color-secondary-hover: #03a9f4;
        --color-green: #37b400;
        --color-green-contrast: var(--color-light);
        --color-red: #f31700;
        --color-red-contrast: var(--color-light);
        --color-orange: #ffc000;
        --color-orange-contrast: var(--color-dark);
        --color-blue: #0058e9;
        --color-blue-contrast: var(--color-light);
        --color-border: rgba(0,0,0, .08);
        --color-border-hover: rgba(0,0,0, .15);
        --border-radius: 4px;
        --space-0: 0;
        --space-1: 4px;
        --space-2: 8px;
        --space-3: 16px;
        --space-4: 32px;
        --space-5: 64px;
        --space-6: 128px;
        --primary-font: 'Roboto', sans-serif;
        --fsize-1: 10px;
        --fsize-2: 12px;
        --fsize-3: 13px;
        --fsize-4: 14px;
        --fsize-5: 16px;
        --fsize-6: 20px;
        --fsize-7: 24px;
        --fsize-8: 28px;
        --fsize-9: 32px;
        --height-input: var(--space-4);
        --height-button: var(--space-4);
        --min-width-button: var(--space-4);
        --px-button: var(--space-2);
        --navbar-width: 256px;

        @media(max-width: 1024px) {
            --height-button: calc(var(--space-4) + 8px);
            --px-button: calc(var(--space-2) + 8px);
        }
    }

    ${resetStyle}

    body {
        font-size: var(--fsize-3);
        font-family: var(--primary-font);
        background-color: var(--color-light);
        color: var(--color-dark);
    }
    h1, h2, h3, h4, h4, h5, h6 {
        font-weight: 500;
    }
    h1 {
        font-size: var(--fsize-9);
    }
    h2 {
        font-size: var(--fsize-8);
    }
    h3 {
        font-size: var(--fsize-7);
    }
    h4 {
        font-size: var(--fsize-6);
    }
    h5 {
        font-size: var(--fsize-5);
    }
    h6 {
        font-size: var(--fsize-4);
    }

    p {
        font-size: var(--fsize-4);
        margin: 15px 0;
    }
    a {
        text-decoration: none;
        color: var(--color-primary);
    }
    a:hover {
        text-decoration: underline;
        color: var(--color-primary-hover);
    }
    input {
        height: 28px;
    }
    textarea {
        min-width: 220px;
        min-height: 120px;
    }
    
    .visually-hidden {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        opacity: 0;
    }
`;

export default GlobalStyle;
