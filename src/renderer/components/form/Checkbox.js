import React from 'react';
import { FormControlLabel, Checkbox as MUICheckbox } from '@mui/material';

export function Checkbox({ label, id, name, checked, onChange }) {
  return (
    <FormControlLabel
      label={label}
      control={<MUICheckbox id={id} name={name || id} checked={checked} onChange={onChange} />}
    />
  );
}
