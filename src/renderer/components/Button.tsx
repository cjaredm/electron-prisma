import MUIButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button/Button';

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MUIButton {...props} size="large" disableRipple>
      {children}
    </MUIButton>
  );
}
