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
import { useNavigate } from "react-router-dom";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://iitkgp.ac.in">
        BuyNSell
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const min = 1;
const max = 5;

export default function SignUp() {
  const [value, setValue] = React.useState(1);

  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      year: data.get("year"),
      roll: data.get("roll"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: { xs: "20px", sm: "50px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "80%",
            display: { xs: "none", sm: "block" },
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={() => goToPath("/")}
          alt="Buy N Sell"
          src={require("../../assets/logo.png")}
        />
        <Box
          component="img"
          sx={{
            width: 34,
            display: { xs: "block", sm: "none" },
            cursor: "pointer",
          }}
          onClick={() => goToPath("/")}
          alt="Buy N Sell"
          src={require("../../assets/cart.png")}
        />
      </Box>
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
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
              <TextField
                required
                fullWidth
                name="roll"
                label="Roll no."
                type="text"
                id="roll"
                autoComplete="Roll no."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="year"
                label="Year of Study"
                type="number"
                id="year"
                value={value}
                onChange={(e) => {
                  var value = parseInt(e.target.value, 10);

                  if (value > max) value = max;
                  if (value < min) value = min;

                  setValue(value);
                }}
                InputProps={{ inputProps: { min, max } }}
                autoComplete="year"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
