import React from 'react';
import { Stack, Divider } from '@mui/material';
import TypographyStyles from './Typography';
import Buttons from './Buttons';
import Colors from './Colors';
import TextFields from './TextFields';
import Checkboxes from './Checkboxes';
import RadioButtons from './RadioButtons';
import Selects from './Selects';
import AutoComplete from './AutoComplete';
import TablePage from './TablePage';
import BadgePage from './Badge';
import Chips from './Chips';
import Alerts from './Alerts';
import Snacks from './Snacks';
import Drawers from './Drawers';

export function Styleguide() {
  return (
    <div style={{ padding: '0 0 48px 0' }}>
      <Stack spacing={3} divider={<Divider style={{ margin: '48px 0px 24px' }} />}>
        <TypographyStyles />
        <Buttons />
        <Colors />
        <TextFields />

        <Stack direction="row" spacing={3}>
          <Checkboxes />
          <RadioButtons />
        </Stack>

        <Selects />
        <AutoComplete />
        <TablePage />
        <BadgePage />
        <Chips />
        <Alerts />
        <Snacks />
        <Drawers />
      </Stack>
    </div>
  );
}

export default React.memo(Styleguide);
