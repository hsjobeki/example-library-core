import React from "react";
import { Checkbox, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { SecunetTheme } from "secunet-mui-theme";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const defaultThemeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2F384E",
      paper: "#2F384E",
    },
  },
});
const defaultTheme = createTheme({});

const themesAvailable = {
  secunet: SecunetTheme,

  default: defaultTheme,

  dark: defaultThemeDark,
};

const ComponentPreview = () => {
  const [age, setAge] = React.useState("");
  const [usedTheme, setTheme] = React.useState("secunet");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = themesAvailable[usedTheme];
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={usedTheme}
        label="used Theme"
        onChange={handleChangeTheme}
      >
        {Object.keys(themesAvailable).map((name, idx) => {
          return (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
      <Typography variant={"h4"}>Component Overview </Typography>
      <Typography variant={"subtitle1"} mb={3}>
        Preview of applied styles
      </Typography>
      <ThemeProvider theme={theme}>
        <Paper>
          <Typography variant={"subtitle1"} sx={{ color: "text.primary" }}>
            Primary Text
          </Typography>
          <Typography variant={"subtitle2"} sx={{ color: "text.secondary" }}>
            Secondary Text
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  borderRadius: 1,
                  p: 2,
                  minWidth: 300,
                }}
              >
                <Box sx={{ color: "text.secondary" }}>Sessions</Box>
                <Box
                  sx={{
                    color: "text.primary",
                    fontSize: 34,
                    fontWeight: "medium",
                  }}
                >
                  98.3 K
                </Box>
                <Box
                  sx={{
                    color: "success.dark",
                    display: "inline",
                    fontWeight: "medium",
                    mx: 0.5,
                  }}
                >
                  +18.77%
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    display: "inline",
                    fontSize: 12,
                  }}
                >
                  vs. last week
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Checkbox />
                  <Checkbox defaultChecked />
                  <Checkbox disabled />
                  <Checkbox defaultChecked disabled />
                </Grid>
                <Grid item xs={12}>
                  <Checkbox color="secondary" defaultChecked />
                  <Checkbox color="success" defaultChecked />
                  <Checkbox color="warning" defaultChecked />
                  <Checkbox color="error" defaultChecked />
                  <Checkbox color="default" defaultChecked />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ "& > :not(style)": { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                      <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                      <NavigationIcon sx={{ mr: 1 }} />
                      Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                      <FavoriteIcon />
                    </Fab>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Rating name="read-only" value={2} readOnly />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: 200 }}>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <VolumeDown />
                      <Slider
                        aria-label="Volume"
                        value={value}
                        onChange={handleSliderChange}
                      />
                      <VolumeUp />
                    </Stack>
                    <Slider
                      disabled
                      defaultValue={30}
                      aria-label="Disabled slider"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Switch defaultChecked />
                  <Switch defaultChecked color="secondary" />
                  <Switch defaultChecked color="info" />
                  <Switch defaultChecked color="warning" />
                  <Switch defaultChecked color="error" />
                  <Switch defaultChecked color="success" />
                  <Switch defaultChecked color="default" />
                </Grid>

                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      P
                    </Avatar>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
                      S
                    </Avatar>
                    <Avatar sx={{ bgcolor: theme.palette.success.main }}>
                      D
                    </Avatar>
                    <Avatar sx={{ bgcolor: theme.palette.warning.main }}>
                      W
                    </Avatar>
                    <Avatar sx={{ bgcolor: theme.palette.error.main }}>
                      E
                    </Avatar>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Login />
            </Grid>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  error
                />
                <TextField
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                  error
                />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  error
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

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
    root: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      background: theme.palette.secondary.main,
    },
  },
  avatarContainer: {
    marginTop: "1em",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Paper padding={"1em"} className={classes.paper}>
        <div className={classes.avatarContainer}>
          <Avatar
            sx={{
              width: theme.spacing(10),
              height: theme.spacing(10),
              background: theme.palette.secondary.main,
            }}
          />
        </div>
        <Typography
          margin={theme.spacing(2)}
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
};

export default ComponentPreview;
