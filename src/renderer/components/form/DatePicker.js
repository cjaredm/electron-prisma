import React from 'react';
import * as dateFns from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';

function getDateError(value, min, max) {
  const date = new Date(value);
  const minDate = min ? new Date(min) : null;
  const maxDate = max ? new Date(max) : null;
  const isBefore = dateFns.isBefore(date, minDate);
  const isAfter = dateFns.isAfter(date, maxDate);
  switch (true) {
    case !date:
      return;
    case minDate && isBefore:
      return `Date must be after ${dateFns.format(new Date(min), 'MM/dd/yyyy')}`;
    case maxDate && isAfter:
      return `Date must be before ${dateFns.format(new Date(max), 'MM/dd/yyyy')}`;
    default:
      return;
  }
}

export function DatePicker({ id, name, label, value, minDate, maxDate, defaultCalendarMonth, onChange, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        id={id}
        name={name || id}
        label={label}
        value={value || null}
        minDate={minDate || undefined}
        maxDate={maxDate || undefined}
        defaultCalendarMonth={defaultCalendarMonth || undefined}
        onChange={onChange}
        renderInput={params => (
          <TextField {...params} size="small" helperText={getDateError(value, minDate, maxDate)} />
        )}
        {...props}
      />
    </LocalizationProvider>
  );
}
