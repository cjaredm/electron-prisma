import { css } from 'styled-components';

export const Colors = css`
  // Text Colors
  .black {
    color: var(--black);
  }
  .off-black {
    color: rgba(0, 0, 0, 0.87);
  }
  .green {
    color: var(--green);
  }
  .red,
  .error {
    color: var(--red);
  }
  .grey {
    color: var(--grey);
  }
  .required {
    color: ${props => props.theme.palette.error.main};
  }

  // Background Colors
  .transparent {
    background: transparent;
  }
  .bg-green {
    background-color: var(--green);
  }
  .bg-red {
    background-color: var(--red);
  }
  .bg-grey {
    background-color: var(--grey);
  }
  .bg-black {
    background-color: var(--black);
  }
  .bg-white {
    background-color: var(--white);
  }
  .bg-off-white {
    background-color: var(--offWhite);
  }
  .bg-light-grey {
    background-color: var(--lightGrey);
  }
  .bg-light-gray {
    background-color: var(--lightGray);
  }
  .bg-background {
    background-color: var(--background);
  }
  .bg-transparent {
    background-color: transparent;
  }

  .bg-primary {
    background-color: ${props => props.theme.palette.primary.main};
  }
  .bg-secondary {
    background-color: ${props => props.theme.palette.secondary.main};
  }
  .bg-error {
    background-color: ${props => props.theme.palette.error.main};
  }
  .bg-warning {
    background-color: ${props => props.theme.palette.warning.main};
  }
  .bg-info {
    background-color: ${props => props.theme.palette.info.main};
  }
  .bg-success {
    background-color: ${props => props.theme.palette.success.main};
  }
`;
