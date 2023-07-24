import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { PageLayout, withPleaseSignIn } from './components';
import Dashboard from './scenes/dashboard';
import './App.css';

export function App() {
  // const location = window.location.pathname;

  return (
    <PageWrapper className="page-wrapper">
      <PageLayout>
        <Routes>
          <Route path="/*" element={<Dashboard />} />

          {/* Route Doesn't Match Anything */}
          <Route path="*" element={<Dashboard />} />
          <Route path="/index.html" element={<Dashboard />} />
        </Routes>
      </PageLayout>
    </PageWrapper>
  );
}
export default withPleaseSignIn(App);

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
