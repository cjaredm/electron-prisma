import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Login } from '../scenes/Login';
import { useMe } from '../hooks';

export function PleaseSignIn({ children, role }) {
  const me = useMe();

  const canView = role ? me?.currentPosition === role : true;
  if (me === 'loading')
    return (
      <Backdrop
        open
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  if (!me) return <Login />;
  if (!canView)
    return (
      <Card>
        <CardHeader title="Permission Denied" />
        <CardContent>
          <Typography>Sorry, you don't have permission to view this page.</Typography>
        </CardContent>
      </Card>
    );

  return children;
}

export const withPleaseSignIn = (Component, role) => props =>
  (
    <PleaseSignIn role={role}>
      <Component {...props} />
    </PleaseSignIn>
  );

export default PleaseSignIn;
