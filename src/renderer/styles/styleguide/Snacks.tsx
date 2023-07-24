import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { H1 } from '../../components';

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Snacks() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} variant="contained" color="secondary">
          Top-Center
        </Button>
      </Box>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={6}>
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })} variant="contained" color="secondary">
            Top-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })} variant="contained" color="secondary">
            Top-Right
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
            variant="contained"
            color="secondary"
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button
            onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
            variant="contained"
            color="secondary"
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
          variant="contained"
          color="secondary"
        >
          Bottom-Center
        </Button>
      </Box>
    </>
  );

  return (
    <div>
      <H1>Snacks</H1>

      <Box sx={{ width: 500 }}>
        {buttons}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        />
      </Box>
    </div>
  );
}
