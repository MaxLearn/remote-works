import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Radio, RadioGroup } from "@mui/material";
import { ValidateEmail } from "../hooks/validation/validateEmail";
import { validatePassword } from "../hooks/validation/validatePassword";
import { useNavigate } from "react-router-dom"
import { signInUser } from "../hooks/user/account/signInUser.ts";
import { signInBusiness } from "../hooks/business/account/signInBusiness.ts";
import { setAccountType } from "../hooks/global/accountType";


const theme = createTheme();

export default function Signin() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"))
    const email: any = data.get("email")
    const password: any = data.get("password")
    const accountType = data.get("controlled-radio-buttons-group")

    if (!ValidateEmail(email)) {
      alert("email not valid")
    } else if (!validatePassword(password)) {
      alert("password must be at least 5 characters!")
    } else if (accountType === "employee") {
      setAccountType(accountType)
      signInUser(email, password)
      navigate("/remote-works")

    } else if (accountType === "company") {
      setAccountType(accountType)
      signInBusiness(email, password)
      navigate("/remote-works")
    }
    else {
      alert("Please chose the account type to log in")
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
            Log in
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account yet? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
