import React from 'react';
import { Card, Stack, Typography, useTheme } from '@mui/material';
import { H2, Text } from '../../components';

export default function Colors() {
  const theme = useTheme();
  return (
    <div>
      <H2 variant="h2">Colors</H2>

      <Stack direction="row" spacing={3}>
        {['primary', 'secondary', 'error', 'yellow', 'warning', 'info', 'success', 'grey'].map(color => (
          <div key={color}>
            {/* @ts-ignore */}
            <Card sx={{ padding: 1, background: theme.palette[color].main, height: 80, width: 80 }}>
              <div>
                {/* @ts-ignore */}
                <Typography variant="body2" sx={{ color: theme.palette[color].contrastText }}>
                  {color}
                </Typography>
              </div>
            </Card>
            {/* @ts-ignore */}
            <Text sx={{ color: theme.palette[color].main }}>
              {/* @ts-ignore */}
              {theme.palette[color].main}
            </Text>
          </div>
        ))}
      </Stack>
    </div>
  );
}
