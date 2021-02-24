import { createGlobalStyle } from "styled-components";
import resetStyle from './resetStyle';

const breakpoints = {
    desktop: '920px',
}

const GlobalStyle = createGlobalStyle`
    html {
        --color-dark: #555;
        --color-dark-rgb: 68,68,68;
        --color-dark-contrast: #f6f6f6;
        --color-dark-hover: #222;
        --color-light: #f6f6f6;
        --color-light-rgb: 246,246,246;
        --color-light-contrast: var(--color-dark);
        --color-light-hover: #eee;
        --color-gray: #949494;
        --color-gray-contrast: var(--color-light);
        --color-lightgray: #bbb;
        --color-lightgray-contrast: var(--color-light);
        --color-primary: #ff6358;
        --color-primary-rgb: 255,99,88;
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #e65a50;
        --color-secondary: #03a9f4;
        --color-secondary-rgb: 3,169,244;
        --color-secondary-contrast: var(--color-light);
        --color-secondary-hover: #028ccc;
        --color-green: #37b400;
        --color-green-contrast: var(--color-light);
        --color-red: #f31700;
        --color-red-contrast: var(--color-light);
        --color-orange: #ffc000;
        --color-orange-contrast: var(--color-light);
        --color-blue: #0058e9;
        --color-blue-contrast: var(--color-light);
        --color-border: rgba(0,0,0, .08);
        --color-border-hover: rgba(0,0,0, .15);
        --border-radius: 4px;
        --space-0: 0;
        --space-1: 5px;
        --space-2: 8px;
        --space-3: 12px;
        --space-4: 16px;
        --space-5: 22px;
        --space-6: 30px;
        --space-7: 36px;
        --space-7: 44px;
        --space-8: 60px;
        --space-9: 80px;
        --space-10: 110px;
        --primary-font: 'Roboto', sans-serif;
        --fsize-1: 8px;
        --fsize-2: 9px;
        --fsize-3: 11px;
        --fsize-4: 13px;
        --fsize-5: 15px;
        --fsize-6: 20px;
        --fsize-7: 26px;
        --fsize-8: 34px;
        --fsize-9: 44px;
        --fsize-10: 55px;
        --height-input: var(--space-4);
        --height-button: var(--space-4);
        --min-width-button: var(--space-4);
        --px-button: var(--space-2);
        --navbar-width: 256px;

        @media(max-width: ${breakpoints.desktop}) {
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
export {
    breakpoints
}