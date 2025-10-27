import React, { useId } from "react";
import {
  Box,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText,
  Typography,
  styled,
} from "@mui/material";

interface Props {
  value: string;
  label?: string;
  type?: string;
  required?: boolean;
  errorText?: string;
  helperText?: string;
  autoComplete?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  autoPasswordToggle?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomOutlinedInput = styled(OutlinedInput)(() => ({
  "&.MuiInputBase-sizeSmall .MuiOutlinedInput-input": {
    fontSize: "12px",
  },
}));

const FormTextfield = ({
  label,
  type,
  value,
  onChange,
  onBlur,
  errorText,
  helperText,
  required,
  autoComplete,
  startAdornment,
  endAdornment,
}: Props) => {
  const uuid = useId();

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <InputLabel htmlFor={uuid}>
        <Typography fontSize={12} color="textDark">
          {label}
          {required && " *"}
        </Typography>
      </InputLabel>
      <FormControl
        variant="outlined"
        error={!!errorText}
        required={required}
        fullWidth
      >
        <CustomOutlinedInput
          id={uuid}
          type={type}
          value={value}
          size="small"
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
        {(errorText || helperText) && (
          <FormHelperText sx={{ marginBottom: "8px" }}>
            {errorText ?? helperText ?? " "}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default FormTextfield;
