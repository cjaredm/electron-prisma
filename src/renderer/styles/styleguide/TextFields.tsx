import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { H2 } from '../../components';

export default function TextFields() {
  return (
    <div>
      <H2>Text Fields</H2>
      <Stack direction="column" spacing={3}>
        {['primary', 'secondary', 'error', 'info', 'success'].map(color => (
          <Stack key={color} direction="row" spacing={3}>
            {['Outlined', 'Filled', 'Standard'].map(variant => (
              <TextField
                key={variant}
                id={`${variant.toLowerCase()}-basic`}
                label={variant}
                // @ts-ignore
                variant={variant.toLowerCase()}
                // @ts-ignore
                color={color}
              />
            ))}
          </Stack>
        ))}

        <Stack direction="row" spacing={3}>
          <TextField id="outlined-helper" label="Outlined W/ Helper Text" variant="outlined" helperText="Helper Text" />
          <TextField id="filled-helper" label="Filled W/ Helper Text" variant="filled" helperText="Helper Text" />
          <TextField id="standard-helper" label="Standard W/ Helper Text" variant="standard" helperText="Helper Text" />
        </Stack>

        <Stack direction="row" spacing={3}>
          <TextField id="error-outlined" label="Outlined Error" variant="outlined" error helperText="Error hint" />
          <TextField id="error-filled" label="Filled Error" variant="filled" error helperText="Error hint" />
          <TextField id="error-standard" label="Standard Error" variant="standard" error helperText="Error hint" />
        </Stack>
      </Stack>
    </div>
  );
}
