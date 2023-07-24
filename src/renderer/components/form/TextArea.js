import React from 'react';
import { FormLabel, TextField } from '@mui/material';
import { TextareaWrapper } from '../layout/layoutHelpers';

export function TextArea({ id, name, label, value, onChange, wrapperStyle, ...props }) {
  return (
    <TextareaWrapper style={wrapperStyle}>
      <FormLabel>{label}</FormLabel>
      <TextField multiline id={id} name={name || id} minRows={3} onChange={onChange} value={value} {...props} />
    </TextareaWrapper>
  );
}
