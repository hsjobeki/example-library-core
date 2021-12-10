import { createTheme } from "@mui/material/styles";

const gray = {
  dark02: "#2F384E",
  dark03: "#485160",
  dark04: "#6D7583",

  medium05: "#ACB1B9",
  medium06: "#C3C7CD",
  medium07: "#E1E2E3",

  light08: "#EAEBED",
  light09: "#F0F0F1",
};
const white = "#ffffff";

const SecunetTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0.8em",
        },
        "*::-webkit-scrollbar-track": {
          background: gray.light09,
        },
        "*::-webkit-scrollbar-thumb": {
          background: gray.medium05,
          borderRadius: "0.4em",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: gray.dark04,
        },
      },
    },
  },
  palette: {
    // #später
    action: {
      active: gray.dark04,
      selected: gray.light08,
      hover: gray.light09,
      disabled: gray.medium06,
      disabledBackground: gray.medium07,
    },

    background: {
      default: "#fafafa",
      paper: white,
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      primary: gray.dark02,
      secondary: gray.dark03,
      disabled: gray.medium05,
    },
    primary: {
      light: "#2F384E",
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5661",
      main: "#D70F37",
      dark: "#AD1035",
      contrastText: "#000",
      red: "#AD1035",
      pink: "#D61486",
      violet: "#882A7B",
      darkViolet: "#611660",
      blue: "#234596",
    },
    accent: {
      primary1: "#D70F37",
      primary2: "#0277A6",
      primary3: "#46B9E8",
    },
    grey: {
      // 50: "#fafafa",
      100: gray.light09,
      200: gray.light08,
      300: gray.medium07,
      400: gray.medium06,
      500: gray.medium05,
      600: gray.dark04,
      // 700: "#616161",
      800: gray.dark03,
      // 900: gray.dark02,
      // A100: "#d5d5d5",
      // A200: "#aaaaaa",
      // A400: "#303030",
      // A700: "#616161",

      dark02: "#2F384E",
      dark03: "#485160",
      dark04: "#727987",

      medium05: "#ACB1B9",
      medium06: "#C3C7CD",
      medium07: "#E1E2E3",

      light08: "#EAEBED",
      light09: "#F0F0F1",
    },
    success: {
      main: "#3C992E",
      dark: "#3C992E",
      light: "#3C992E",
    },
    warning: {
      main: "#FBC91D",
      dark: "#FBC91D",
      light: "#FBC91D",
    },
    error: {
      main: "#D70F37",
      dark: "#D70F37",
      light: "#D70F37",
    },
    info: {
      main: "#275B99",
      dark: "#00326a",
      light: "#5e88ca",
    },
    security: {
      topsecret: "#3C992E",
      secret: "#D70F37",
      restricted: "#E3B413",
      confidential: "#275B99",
      unclassified: "#ACB1B9",
    },
  },
});

export default SecunetTheme;
