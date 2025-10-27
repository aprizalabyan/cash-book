"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { composeRules, r_required } from "@/utils/validation-rules";
import {
  Box,
  Grid,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LogoFull from "@/components/base/logo/Full";
import FormTextfield from "@/components/base/form/Textfield";
import DataReportSvg from "@/assets/images/data-report.svg";

type FormValues = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(`Email: ${data.username} Password: ${data.password}`);
  });

  return (
    <Grid container spacing={2} height="100%">
      <Grid size={5} height="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <LogoFull />
            <Typography fontSize={24} fontWeight={600} color="textDark">
              Log In
            </Typography>
            <Typography fontSize={12} color="textDark">
              Welcome Back! Please enter your details.
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              component="form"
              onSubmit={onSubmit}
            >
              <Controller
                name="username"
                defaultValue="username"
                control={control}
                rules={{ validate: composeRules([r_required]) }}
                render={({ field, fieldState }) => (
                  <FormTextfield
                    {...field}
                    label="Username"
                    required
                    errorText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ validate: composeRules([r_required]) }}
                render={({ field, fieldState }) => (
                  <FormTextfield
                    {...field}
                    label="Password"
                    type={showPass ? "text" : "password"}
                    required
                    errorText={fieldState.error?.message}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPass ? "Hide password" : "Show password"
                          }
                          onClick={() => setShowPass((s) => !s)}
                          onMouseDown={(e) => e.preventDefault()}
                          size="small"
                          edge="end"
                        >
                          {showPass ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ textTransform: "none" }}
                disabled={!isValid || isSubmitting}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={7} padding={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          borderRadius={6}
          bgcolor="backgroundDarken.main"
        >
          <Box height="100%" width="100%" maxWidth="70%">
            <DataReportSvg width="100%" height="100%" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
