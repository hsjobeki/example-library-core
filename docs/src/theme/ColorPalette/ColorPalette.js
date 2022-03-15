import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SecunetTheme as theme } from "secunet-mui-theme";

const useStyles = makeStyles((defaultTheme) => ({
  colorContainer: {
    // minHeight: theme.spacing(10),
  },
}));

const ColorPalette = () => {
  const classes = useStyles();
  const defaultTheme = useTheme();
  console.log(defaultTheme, theme);
  const excluded = ["contrastThreshold", "tonalOffset", "type", "mode"];
  return (
    <div>
      <Grid container spacing={1}>
        {Object.keys(theme.palette).map((key) => {
          const colors = theme.palette[key];
          if (typeof colors === "string" && !excluded.includes(key)) {
            // console.log(key, colors);
            return (
              <Grid
                key={key}
                item
                xs={12}
                className={classes.colorContainer}
                style={{
                  background: colors,
                  color: theme.palette.getContrastText(colors),
                }}
              >
                {key}
              </Grid>
            );
          } else {
            return (
              <Grid key={`${key}`} item xs={12}>
                <Grid container>
                  {Object.keys(colors).map((shade) => {
                    const shadedColor = colors[shade];
                    // console.log(key,colors, shadedColor);
                    if (
                      typeof shadedColor === "string" &&
                      !excluded.includes(key)
                    ) {
                      return (
                        <Grid
                          key={shade}
                          item
                          xs={4}
                          className={classes.colorContainer}
                          style={{
                            background: shadedColor,
                            color: theme.palette.getContrastText(shadedColor),
                          }}
                        >
                          <div>{`${key}.${shade}`}</div>
                          <div>{`value: ${theme.palette[key][shade]}`}</div>
                          <div>{`usage: theme.palette.${key}.${shade}`}</div>
                        </Grid>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Grid>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default ColorPalette;
