import { css } from 'styled-components';

export const Flex = css`
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .gap-4 {
    gap: 4px;
  }
  .gap-8 {
    gap: 8px;
  }
  .gap-16 {
    gap: 16px;
  }
  .gap-24 {
    gap: 24px;
  }
  .align-center {
    align-items: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-space-between {
    justify-content: space-between;
  }
`;
