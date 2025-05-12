import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const egyptianPhoneNumberRegExp = /^01[0125][0-9]{8}$/;

const data = [
  { value: "Admin", label: "Admin" },
  { value: "Manger", label: "Manger" },
  { value: "User", label: "User" },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log("doneeeeeeeeeeee", data);
    handleClick();
  };

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "75vh",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & min 3 characters & max 50 characters"
                : null
            }
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 characters & max 50 characters"
                : null
            }
            {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email Address"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "Please provide a valid Egyptian phone number (e.g., 01xxxxxxxxx)"
              : null
          }
          {...register("ContactNumber", {
            required: true,
            pattern: egyptianPhoneNumberRegExp,
          })}
          label="Phone Number"
          variant="filled"
        />

        <TextField
          label="Address Line 1"
          variant="filled"
          {...register("address1", { required: true })}
        />
        <TextField
          label="Address Line 2 (Optional)"
          variant="filled"
          {...register("address2")}
        />

        <TextField
          variant="filled"
          select
          label="Role"
          defaultValue="User"
          {...register("role", { required: true })}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
