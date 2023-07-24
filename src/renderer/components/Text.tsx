import React from 'react';
import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography/Typography';

export function H1({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h1" mb="24px" {...props}>
      {children}
    </Typography>
  );
}

export function H2({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h2" mb="16px" {...props}>
      {children}
    </Typography>
  );
}

export function H3({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h3" mb="8px" {...props}>
      {children}
    </Typography>
  );
}

export function H4({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h4" mb="4px" {...props}>
      {children}
    </Typography>
  );
}

export function H5({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h5" {...props}>
      {children}
    </Typography>
  );
}

export function Text({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
}
