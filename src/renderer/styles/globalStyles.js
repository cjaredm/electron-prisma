import { createGlobalStyle } from 'styled-components';
import { Typography } from './typography';
import { Overflow } from './overflow';
import { Margins } from './margins';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { Flex } from './flex';

export const theme = {
  palette: {
    primary: { main: '#f44336' },
    secondary: { main: '#36e7f4' },
    error: { main: '#B22424' },
    warning: { main: '#ff9800' },
    info: { main: '#2196f3' },
    success: { main: '#4caf50' },
    background: { main: '#E7EBEF' },
    grey: { main: '#e1e1e1', contrastText: '#000' },
    yellow: { main: '#f9e425', contrastText: '#000' }
  },
  typography: {
    fontSize: '1.5rem',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h4: { fontSize: '2.2rem' },
    h5: { fontSize: '2rem' },
    body1: { fontSize: '1.6rem' },
    body2: { fontSize: '1.4rem' }
  }
};

export const GlobalStyles = createGlobalStyle`
  html {
    --green: #2e7d32;
    --red: #ff0000;
    --black: #393939;
    --background: #E7EBEF;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  ${Typography}
  ${Colors}
  ${Overflow}
  ${Sizes}
  ${Margins}
  ${Flex}

  .page-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
  .relative {
    position: relative;
  }

  .pointer {
    cursor: pointer;
  }

  @media (min-height: 600px) {
    .hide-desktop {
      display: none;
    }
  }

  .label-value {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 8px;
    margin-left: 16px;
  }
  .label-value-controls {
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    gap: 8px;
    margin-left: 16px;
  }
  .label-value__controls-button {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-end;
  }
  @media (max-width: 500px) {
    .label-value-controls, .label-value {
      grid-template-columns: 1fr;
      gap: 2px;
      flex-wrap: wrap;
      margin-left: 0;
      margin-bottom: 16px;
    }
    .label-value-controls {
      grid-template-areas:
        'label control'
        'value control';
      .label-value__controls {
        grid-area: control;
      }
    }
  }

  @media (max-width: 600px) {
    .drawer-box {
      width: 100%;
    }
    .MuiModal-root.drawer-width-100 .MuiDrawer-paperAnchorRight {
      width: 100%;
    }
    .MuiModal-root:not(.MuiPopover-root) .MuiPaper-root {
      max-width: 100%;
      height: 100%;
    }
    .hide-mobile {
      display: none;
    }
  }
`;
