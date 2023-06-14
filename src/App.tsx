import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './Router';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap'); */
    ${reset}
    body {
        font-family: 'Source Sans 3', sans-serif;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor}
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    )
}
export default App;
