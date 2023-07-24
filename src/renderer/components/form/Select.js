import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";

export function Select({
  sx = {},
  id,
  name,
  className,
  label,
  onChange,
  value,
  options,
  required,
  ...props
}) {
  const labelId = React.useMemo(() => `${id}-label`, [id]);
  return (
    <FormControl
      sx={{ minWidth: "100px", ...sx }}
      className={className}
      size="small"
      required={required}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        labelId={labelId}
        id={id}
        name={name || id}
        label={label}
        onChange={onChange}
        value={value || ""}
        required={required}
        {...props}
      >
        {options.map(({ key, value, label, onClick }) => (
          <MenuItem
            key={key}
            value={value || ""}
            onClick={onClick}
            children={label}
          />
        ))}
      </MUISelect>
    </FormControl>
  );
}
