import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MUISelect, Stack } from '@mui/material';
import { SelectProps } from '@mui/material/Select/Select';
import { H2 } from '../../components';

type Option = {
  label: string;
  value: string;
};
function Select({ options, ...props }: SelectProps & { options: Option[] }) {
  return (
    <MUISelect {...props}>
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </MUISelect>
  );
}

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Strawberry', value: 'strawberry' }
];
export default function Selects() {
  return (
    <div>
      <H2>Select</H2>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3}>
          {['outlined', 'filled', 'standard'].map(variant => (
            <FormControl key={variant} fullWidth style={{ width: 300 }}>
              <InputLabel id={`${variant}-label`}>Favorite Fruit</InputLabel>
              <Select
                labelId={`${variant}-label`}
                label="Favorite Fruit"
                id={`${variant}-select`}
                options={options}
                variant={variant as any}
              />
            </FormControl>
          ))}
        </Stack>

        <Stack direction="row" spacing={3}>
          {['outlined', 'filled', 'standard'].map(variant => (
            <FormControl key={variant} fullWidth style={{ width: 300 }}>
              <InputLabel id={`${variant}-label-disabled`}>Favorite Fruit Disabled</InputLabel>
              <Select
                labelId={`${variant}-label-disabled`}
                label="Favorite Fruit Disabled"
                id={`${variant}-select-disabled`}
                options={options}
                variant={variant as any}
                disabled
              />
            </FormControl>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
