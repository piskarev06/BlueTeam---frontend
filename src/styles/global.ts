import { createGlobalStyle } from 'styled-components'

import { baseTheme } from './themes/baseTheme/baseTheme'

export const GlobalStyles = createGlobalStyle`
html {
    font-size: 16x;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: ${baseTheme.colors.black};
  
    background: ${baseTheme.colors.bg};
  
    &._lock {
      overflow: hidden;
    }
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
  }

  .container {
    max-width: ${baseTheme.sizes.container};
    margin: 0 auto;
    padding: 0 15px;
  
  }
  
  .h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }

  .section__block {
    padding: 35px 30px;
  
    text-align: center;
  
    border-radius: 10px;
    background: #fff;
  }
`
