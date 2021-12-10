const path = require("path");
const theme = require("./styleguidist.theme");

module.exports = {
  title: "secunet-mui-theme",
  // usageMode: "expand",
  exampleMode: "expand",
  pagePerSection: true,
  ribbon: {
    url: "https://bitbucket.secunet.de/projects/EDGEPRO/repos/secunet-mui-theme/browse",
    text: "Fork on BitBucket ",
  },
  ignore: [
    "**/index.j*",
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts",
  ],
  sections: [
    {
      name: "Getting Started",
      content: "./src/GettingStarted.md",
      sectionDepth: 1,
    },
    {
      sectionDepth: 1,
      name: "Secunet theme",
      components: "src/theme/{*.js,**/*.js}",
    },
  ],

  handlers: (componentPath) =>
    require("react-docgen").defaultHandlers.concat(
      require("react-docgen-external-proptypes-handler")(componentPath),
      require("react-docgen-displayname-handler").createDisplayNameHandler(
        componentPath
      )
    ),
  ...theme,
};
