import React from 'react';

export type UseFormType<T> = {
  inputs: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  resetForm: () => void;
  clearForm: () => void;
};

export function useForm<T>(initial: T): UseFormType<T> {
  // create a state object for our inputs
  const [inputs, setInputs] = React.useState<T>(initial);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // @ts-ignore
    const { value, name, type, checked } = e.target;
    let parsedValue: string | number | boolean | FileList | File | null = value;
    if (type === 'number') {
      parsedValue = parseInt(value, 10);
    }
    if (type === 'file') {
      // @ts-ignore
      const { files } = e.target;
      if (files && files.length > 0) {
        parsedValue = files[0];
      }
    }
    if (type === 'checkbox') {
      parsedValue = checked;
    }

    setInputs(values => ({
      ...values,
      [name]: parsedValue
    }));
  }, []);

  const resetForm = React.useCallback(() => {
    setInputs(initial);
  }, [initial]);

  const clearForm = React.useCallback(() => {
    // @ts-ignore
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key]) => [key, ''])) as T;
    setInputs(blankState);
  }, [inputs]);

  // return the things we want to surface from this custom hook
  const returnValues = React.useMemo(() => {
    return {
      inputs,
      handleChange,
      resetForm,
      clearForm
    };
  }, [inputs, handleChange, resetForm, clearForm]);
  return returnValues;
}
