import React from 'react';
import { Button, Card, Stack } from '@mui/material';
import { H2, H3 } from '../../components';

export default function Buttons() {
  return (
    <Card sx={{ padding: 2 }}>
      <H2 variant="h2">Buttons</H2>
      <div>
        <Stack direction="column" spacing={3}>
          <div>
            <H3 variant="h3">Text</H3>
            <Stack direction="row" spacing={1}>
              {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map(color => (
                // @ts-ignore
                <Button key={color} variant="text" color={color}>
                  {color}
                </Button>
              ))}
              <Button variant="text" disabled>
                Disabled
              </Button>
            </Stack>
          </div>

          <div>
            <H3 variant="h3">Outlined</H3>
            <Stack direction="row" spacing={1}>
              {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map(color => (
                // @ts-ignore
                <Button key={color} variant="outlined" color={color}>
                  {color}
                </Button>
              ))}
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            </Stack>
          </div>

          <div>
            <H3 variant="h3">Contained</H3>
            <Stack direction="row" spacing={1}>
              {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map(color => (
                // @ts-ignore
                <Button key={color} variant="contained" color={color}>
                  {color}
                </Button>
              ))}
              <Button variant="contained" disabled>
                Disabled
              </Button>
            </Stack>
          </div>
        </Stack>
      </div>
    </Card>
  );
}
