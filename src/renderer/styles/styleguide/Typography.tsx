import React from 'react';
import { Typography as MUIText } from '@mui/material';
import { H1, H2, H3, H4, H5, Text } from '../../components';

export default function TypographyPage() {
  return (
    <div>
      <H1>H1 Typography</H1>
      <H2>H2 Typography</H2>
      <H3>H3 Typography</H3>
      <H4>H4 Typography</H4>
      <H5>H5 Typography</H5>

      <Text variant="body1">Body1 Typography</Text>
      <MUIText variant="body2">Body2 Typography</MUIText>
      <MUIText variant="button" sx={{ display: 'block' }}>
        Button Typography
      </MUIText>
      <MUIText variant="caption" sx={{ display: 'block' }}>
        Caption Typography
      </MUIText>
      <MUIText variant="overline" sx={{ display: 'block' }}>
        Overline Typography
      </MUIText>
      <MUIText variant="subtitle1" sx={{ display: 'block' }}>
        Subtitle1 Typography
      </MUIText>
      <MUIText variant="subtitle2" sx={{ display: 'block' }}>
        Subtitle2 Typography
      </MUIText>
    </div>
  );
}
