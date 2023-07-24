import React from 'react';
import { FormControlLabel, FormGroup, Radio } from '@mui/material';
import { H2 } from '../../components';

export default function RadioButtons() {
  return (
    <div style={{ width: 300 }}>
      <H2>Radio Buttons</H2>
      <FormGroup>
        <FormControlLabel
          control={<Radio defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Default Checked"
        />
        <FormControlLabel
          required
          control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Unchecked Required"
        />
        <FormControlLabel
          required
          control={<Radio disabled sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Disabled Unchecked Required"
        />
        <FormControlLabel
          disabled
          control={<Radio disabled checked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label="Disabled Checked"
        />
      </FormGroup>
    </div>
  );
}
