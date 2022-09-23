# secunet-mui-theme

To use the theme values just create a theme and provide it to your react-app at the root level:

```
import { ThemeProvider, createTheme } from "@mui/material";
import { secunetThemeOptions } from "@secunet/theme";


const secunetTheme = createTheme(secunetThemeOptions);

const MyApp = () => {
  return (
    <ThemeProvider theme={secunetTheme}>
        {/* app content */}
    </ThemeProvider>
  );
};

```

This theme provides the following colors to Material UI (MUI):

<div style="display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;">
  <div style="background:#59627a;padding:1em;margin:8px">
    <span >primary.light: #59627a</span>
  </div>
  <div style="background:#2f384e;padding:1em;margin:8px">
    <span >primary.main: #2f384e</span>
  </div>
  <div style="background:#071226;padding:1em;margin:8px">
    <span >primary.dark: #071226</span>
  </div>
  <div style="background:#ff5661;padding:1em;margin:8px">
    <span >secondary.light: #ff5661</span>
  </div>
  <div style="background:#D70F37;padding:1em;margin:8px">
    <span >secondary.main: #D70F37</span>
  </div>
  <div style="background:#AD1035;padding:1em;margin:8px">
    <span >secondary.dark: #AD1035</span>
  </div>  
  
  <div style="background:#6D7583;padding:1em;margin:8px">
    <span >action.active: #6D7583</span>
  </div>  
  <div style="background:#EAEBED;padding:1em;margin:8px">
    <span >action.selected: #EAEBED</span>
  </div>  
  <div style="background:#F0F0F1;padding:1em;margin:8px">
    <span >action.hover: #F0F0F1</span>
  </div>  
  <div style="background:#C3C7CD;padding:1em;margin:8px">
    <span >action.disabled: #C3C7CD</span>
  </div>  
  <div style="background:#E1E2E3;padding:1em;margin:8px">
    <span >action.disabledBackground: #E1E2E3</span>
  </div>

  <div style="background:#fafafa;padding:1em;margin:8px">
    <span >background.default: #fafafa</span>
  </div>  
  <div style="background:#ffffff;padding:1em;margin:8px">
    <span >background.paper: #ffffff</span>
  </div>  
  
  <div style="background:#2F384E;padding:1em;margin:8px">
    <span >text.primary: #2F384E</span>
  </div>  
  <div style="background:#485160;padding:1em;margin:8px">
    <span >text.secondary: #485160</span>
  </div>  
  <div style="background:#ACB1B9;padding:1em;margin:8px">
    <span >text.disabled: #ACB1B9</span>
  </div>

  <div style="background:#70cb5c;padding:1em;margin:8px">
    <span >success.light: #70cb5c</span>
  </div>  
  <div style="background:#3C992E;padding:1em;margin:8px">
    <span >success.main: #3C992E</span>
  </div>  
  <div style="background:#006a00;padding:1em;margin:8px">
    <span >success.dark: #006a00</span>
  </div>

  <div style="background:#fffc5a;padding:1em;margin:8px">
    <span >warning.light: #fffc5a</span>
  </div>  
  <div style="background:#FBC91D;padding:1em;margin:8px">
    <span >warning.main: #FBC91D</span>
  </div>  
  <div style="background:#c39900;padding:1em;margin:8px">
    <span >warning.dark: #c39900</span>
  </div>

  <div style="background:#ff5661;padding:1em;margin:8px">
    <span >error.light: #ff5661</span>
  </div>  
  <div style="background:#D70F37;padding:1em;margin:8px">
    <span >error.main: #D70F37</span>
  </div>  
  <div style="background:#9d0012;padding:1em;margin:8px">
    <span >error.dark: #9d0012</span>
  </div>

  <div style="background:#5e88ca;padding:1em;margin:8px">
    <span >info.light: #5e88ca</span>
  </div>  
  <div style="background:#275B99;padding:1em;margin:8px">
    <span >info.main: #275B99</span>
  </div>  
  <div style="background:#00326a;padding:1em;margin:8px">
    <span >info.dark: #00326a</span>
  </div>

</div>
