import { createTheme, ThemeOptions } from "@mui/material";
import { ExtendedTypographyOptions, typographyTheme } from "./components/font";
import { componentStyleOverrides } from "./components/componentsOverride";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E9686D",
    },
  },
  typography: typographyTheme as ExtendedTypographyOptions,
  components: componentStyleOverrides,
  spacing: 1,
} as ThemeOptions);

export default theme;
