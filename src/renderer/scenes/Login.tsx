import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { TextField, Stack, Box, Alert } from '@mui/material';
import { Button, useForm, UseFormType } from '../components';
import { MUTATION_LOGIN, QUERY_ME } from '../resolvers';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 500px;
`;

type InputState = { email: string; password: string };
type ErrorState = InputState & { other: string };
const initialInputs = { email: 'email@email.com', password: '123456asdasdasd' };
const initialErrors = { email: '', password: '', other: '' };

export function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<ErrorState>(initialErrors);
  const { inputs, handleChange, resetForm }: UseFormType<InputState> = useForm(initialInputs);
  const [login, { loading }] = useMutation(MUTATION_LOGIN, { variables: inputs, refetchQueries: [QUERY_ME] });

  const onChange = (e: any) => {
    setErrors(oldErrors => ({ ...oldErrors, [e.target.name]: '' }));
    handleChange(e);
  };

  const validate = React.useCallback(({ email, password }: InputState) => {
    const newErrors = { ...initialErrors };
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.values(newErrors).every(x => !x);
  }, []);

  const handleSubmit = React.useCallback(
    async (e: any) => {
      try {
        setErrors(initialErrors);
        e.preventDefault(); // stop the form from submitting
        const isValid = validate(inputs);
        if (!isValid) return;

        await login({ variables: { email: inputs.email.toLowerCase(), password: inputs.password } });

        navigate('/');
        resetForm();
      } catch (err: any) {
        console.error(err);
        setErrors(oldErrors => ({ ...oldErrors, other: err?.message }));
      }
    },
    [validate, login, inputs, navigate, resetForm]
  );

  return (
    <LayoutWrapper>
      <Box component="form" noValidate autoComplete="off" width={400}>
        <Stack spacing={2} useFlexGap>
          <TextField
            label="Email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={onChange}
            disabled={loading}
            helperText={errors.email}
            error={!!errors.email}
            required
            size="small"
            color="secondary"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={onChange}
            disabled={loading}
            helperText={errors.password}
            error={!!errors.password}
            required
            size="small"
            color="secondary"
          />

          {!!errors.other && <Alert severity="error">{errors.other}</Alert>}

          <Button type="submit" variant="contained" onClick={handleSubmit} disabled={loading}>
            Login
          </Button>
        </Stack>
      </Box>
    </LayoutWrapper>
  );
}

export default React.memo(Login);
