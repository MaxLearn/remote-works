import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Radio, RadioGroup } from "@mui/material";
import { createUser } from "../hooks/createUser.ts";
import { createBusiness } from "../hooks/createBusiness.ts";
import { ValidateEmail } from "../hooks/validateEmail.ts";
import { validatePassword } from "../hooks/validatePassword.ts";
import { useNavigate } from "react-router-dom"

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"))
    const email = data.get("email")
    const password = data.get("password")
    const accountType = data.get("controlled-radio-buttons-group")

    if (!ValidateEmail(email)){
      alert("email not valid")
    }  else if (!validatePassword(password)){
      alert("password must be at least 5 characters!")
    } else if(accountType === "employee"){
alert("employee account created!")
      createUser(
        email,
        password
        );
        navigate("/signin")
      }  else if ((accountType === "company")){
        alert("business account created!")
        createBusiness(
          email,
          password
        );
navigate("/signin")
      }
        else {
          alert("Please chose the account type you wish to create")
        } 
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "12vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "rgb(21, 81, 141)" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <fieldset>
                  <legend>Account Type</legend>
                  <RadioGroup
                   /*  sx={{alignContent: 'center', justifyContent: 'center'}} */
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                        /* value={value} */
  /*   onChange={handleChange} */
                  >
                    <FormControlLabel
                      value="company"
                      control={<Radio />}
                      label="Company"
                    />
                    <FormControlLabel
                      value="employee"
                      control={<Radio />}
                      label="Employee"
                    />
                  </RadioGroup>
                </fieldset>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive job posts, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
