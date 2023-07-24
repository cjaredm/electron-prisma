import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import { H2 } from '../../components';

type Color = 'primary' | 'secondary' | 'warning' | 'error' | 'success' | undefined;
export default function Chips() {
  return (
    <div>
      <H2>Chip</H2>

      <Stack direction="row" spacing={1}>
        {['primary', 'secondary', 'warning', 'error', 'success'].map(color => (
          <Stack key={color || 'default'} spacing={1}>
            <Chip label="Filled" variant="filled" color={color as Color} onClick={() => {}} />
            <Chip
              icon={<FaceIcon color="secondary" />}
              label="With Icon Filled"
              variant="filled"
              color={color as Color}
              onClick={() => {}}
            />
            <Chip label="Outlined" variant="outlined" color={color as Color} onClick={() => {}} />
            <Chip
              icon={<FaceIcon color="warning" />}
              label="With Icon Outlined"
              variant="outlined"
              color={color as Color}
              onClick={() => {}}
            />
          </Stack>
        ))}
      </Stack>
    </div>
  );
}
