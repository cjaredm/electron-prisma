import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

export default function Checkboxes() {
  return (
    <div style={{ width: 300 }}>
      <Typography variant="h2">Checkboxes</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Default Checked"
        />
        <FormControlLabel
          required
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Unchecked Required"
        />
        <FormControlLabel
          required
          control={<Checkbox disabled sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Disabled Unchecked Required"
        />
        <FormControlLabel
          disabled
          control={<Checkbox disabled checked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Disabled Checked"
        />
      </FormGroup>
    </div>
  );
}
