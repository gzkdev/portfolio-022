import { createGlobalStyle } from "styled-components";
import SatoshiBold from "./assets/fonts/Satoshi-Bold.woff";
import SatoshiRegular from "./assets/fonts/Satoshi-Regular.woff";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: Satoshi;
    src: url(${SatoshiRegular}) format("woff");
    font-weight: normal;
    }

    @font-face {
    font-family: Satoshi;
    src: url(${SatoshiBold}) format("woff");
    font-weight: bold;
    }

    *,*::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html,
    body {
    height: 100%;
    }

    html {
    font-size: 100%;
    scroll-behavior: smooth;
    box-sizing: border-box;
    }

    :root {
    --color-100: #ffffff;
    --color-110: #fbfbfb;
    --color-120: #dceeff;
    --color-200: #3898ff;
    --color-300: #081ae1;
    --color-400: #191155;
    --color-500: #415acb;
    --color-600: #f6591c;
    --color-700: #01010e;
    --color-710: #0f0f27;
    --color-800: #b0b0b1;
    --color-900: #eeeeee;
    --font-s1ze-100: clamp(0.69rem, calc(0.59rem + 0.52vw), 0.96rem);
    --font-s1ze-200: clamp(0.8rem, calc(0.61rem + 0.82vw), 1rem);
    --font-s1ze-300: clamp(1rem, calc(0.63rem + 1.22vw), 1.5rem);
    --font-s1ze-400: clamp(0.98rem, calc(0.64rem + 1.74vw), 1.88rem);
    --font-s1ze-500: clamp(1.11rem, calc(0.63rem + 2.41vw), 2.34rem);
    --font-s1ze-600: clamp(1.25rem, calc(0.59rem + 3.29vw), 2.93rem);
    --font-s1ze-700: clamp(1.4rem, calc(0.52rem + 4.41vw), 3.66rem);
    --font-s1ze-800: clamp(1.58rem, calc(0.41rem + 5.85vw), 4.58rem);
    }

    body {
    font-size: var(--font-s1ze-300);
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    line-height: 1.5;
    color: var(--color-800);
    background-color: var(--color-700);
    }

    h1,
    h2,
    h3 {
    font-weight: bold;
    line-height: 1.2;
    overflow-wrap: break-word;
    color: var(--color-900);
    }

    h1 {
    font-size: var(--font-s1ze-800);
    text-transform: capitalize;
    }

    h1 span {
    display: block;
    color: var(--color-800);
    }

    h2 {
    font-size: var(--font-s1ze-700);
    }

    section {
    width: 100%;
    padding: 8rem 1rem;
    margin: 0 auto;
    }
`;

export default GlobalStyle;
