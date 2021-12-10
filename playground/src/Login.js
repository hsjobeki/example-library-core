import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: theme.spacing(6),
  },
  paper: {
    maxWidth: "700px",
    minWidth: "400px",
    padding: "1em",
  },
  formFooter: {
    display: "flex",
    justifyContent: "end",
    marginTop: "1em",
  },
  heading: {
    margin: theme.spacing(2),
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    background: theme.palette.secondary.main,
  },
  avatarContainer: {
    marginTop: "1em",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.avatarContainer}>
          <Avatar className={classes.largeAvatar} />
        </div>
        <Typography
          className={classes.heading}
          variant="h3"
          component="div"
          align="center"
        >
          {" "}
          Sign In
        </Typography>

        <Box component="form" data-testid="LoginForm">
          <Grid container spacing={2}>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
            >
              <TextField
                required
                label="Username"
                name="username"
                data-testid="UsernameInput"
              />
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
            >
              <TextField
                required
                label={"Password"}
                name="password"
                type="password"
                data-testid="PasswordInput"
              />
            </Grid>
          </Grid>

          <div className={classes.formFooter}>
            <Button data-testid="LoginButton" variant="contained" type="submit">
              Login
            </Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
}
