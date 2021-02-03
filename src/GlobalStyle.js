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
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #ff6358;
        --color-secondary: #03a9f4;
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
        --fsize-1: 10px;
        --fsize-2: 12px;
        --fsize-3: 14px;
        --fsize-4: 18px;
        --fsize-5: 24px;
        --fsize-6: 34px;
        --height-input: var(--space-4);
        --height-button: var(--space-4);
        --min-width-button: var(--space-4);
        --px-button: var(--space-2);

        @media(max-width: 1024px) {
            --height-button: calc(var(--space-4) + 8px);
            --px-button: calc(var(--space-2) + 8px);
        }
    }

    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
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

    ${resetStyle}
`;

export default GlobalStyle;
