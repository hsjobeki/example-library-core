import React from "react";
import { useTheme } from "@mui/material/styles";
import { createTheme, Grid } from "@mui/material";
import { secunetThemeOptions } from "secunet-mui-theme";

const secunetTheme = createTheme(secunetThemeOptions);

const ColorPalette = () => {
  const defaultTheme = useTheme();
  console.log({ defaultTheme, secunetTheme });
  const excluded = [
    "contrastThreshold",
    "getContrastText",
    "augmentColor",
    "tonalOffset",
    "type",
    "mode",
  ];
  const excludedShades = [
    "primaryChannel",
    "secondaryChannel",
    "activeChannel",
    "selectedChannel",
  ];
  return (
    <div>
      <Grid container spacing={1}>
        {Object.keys(secunetTheme.palette).map((key) => {
          const colors = secunetTheme.palette[key];

          if (typeof colors === "string" && !excluded.includes(key)) {
            return (
              <Grid
                key={key}
                item
                xs={12}
                style={{
                  background: colors,
                  color: secunetTheme.palette.getContrastText(colors),
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
                    if (
                      typeof shadedColor === "string" &&
                      !excluded.includes(key) &&
                      !excludedShades.includes(shade)
                    ) {
                      console.log({ key, colors, shade, shadedColor });
                      return (
                        <Grid
                          key={shade}
                          item
                          xs={4}
                          style={{
                            background: shadedColor,
                            color:
                              secunetTheme.palette.getContrastText(shadedColor),
                          }}
                        >
                          <div>{`${key}.${shade}`}</div>
                          <div>{`value: ${secunetTheme.palette[key][shade]}`}</div>
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
