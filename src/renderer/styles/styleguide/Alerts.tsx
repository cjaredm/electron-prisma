import React from 'react';
import { Alert, Stack } from '@mui/material';
import { H1 } from '../../components';

export default function Alerts() {
  return (
    <div>
      <H1>Alerts</H1>
      <Stack direction="column" spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
    </div>
  );
}
