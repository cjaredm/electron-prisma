import React from 'react';
import styled from 'styled-components';
import MUIBadge, { BadgeProps } from '@mui/material/Badge';

const StyledBadge = styled(MUIBadge)`
  .MuiSvgIcon-root {
    font-size: 24px;
  }
`;

export function Badge({ children, ...props }: BadgeProps) {
  return <StyledBadge {...props}>{children}</StyledBadge>;
}
