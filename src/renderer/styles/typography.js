import { css } from 'styled-components';

export const Typography = css`
  // Line Heights
  .line-height-1 {
    line-height: 1;
  }
  .line-height-1-5 {
    line-height: 1.5;
  }

  // Font Sizes
  .h1 {
    font-size: 2.5rem;
  }
  .h2 {
    font-size: 2.2rem;
  }
  .h3 {
    font-size: 2rem;
  }
  .h4 {
    font-size: 1.6rem;
  }
  .h5 {
    font-size: 1.5rem;
  }

  // Font Weights
  .bold {
    font-weight: bold;
  }
  .medium-bold {
    font-weight: 500;
  }
  .regular-bold {
    font-weight: 400;
  }
  .light-bold {
    font-weight: 300;
  }

  // Text Align
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }

  // Text Transform
  .text-uppercase {
    text-transform: uppercase;
  }
  .text-lowercase {
    text-transform: lowercase;
  }
  .text-capitalize {
    text-transform: capitalize;
  }

  // Text Decoration
  .text-underline {
    text-decoration: underline;
  }
  .text-line-through {
    text-decoration: line-through;
  }

  // Text Color
  .text-black {
    color: var(--black);
  }
  .text-white {
    color: var(--white);
  }
  .text-green {
    color: var(--green);
  }
  .text-red {
    color: var(--red);
  }
  .text-gray {
    color: var(--gray);
  }
  .text-light-gray {
    color: var(--lightGray);
  }
  .text-off-white {
    color: var(--offWhite);
  }

  // Text Shadow
  .text-shadow {
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }
`;
