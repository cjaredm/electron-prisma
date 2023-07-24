import styled from 'styled-components';
import { FormControl } from '@mui/material';
import React from 'react';
import { Header } from './Header';

export const TextareaWrapper = styled(FormControl)`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <Content>{children}</Content>
    </>
  );
}

const Content = styled.div`
  overflow-y: auto;
  padding: 24px 24px 48px 24px;
  height: 100%;
  width: 100%;
`;
