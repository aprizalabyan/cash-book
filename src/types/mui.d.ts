import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    textDark: Palette["primary"];
    textGrey: Palette["primary"];
    accentRed: Palette["primary"];
    accentGrey: Palette["primary"];
    backgroundDarken: Palette["primary"];
  }
  interface PaletteOptions {
    textDark?: PaletteOptions["primary"];
    textGrey?: PaletteOptions["primary"];
    accentRed?: PaletteOptions["primary"];
    accentGrey?: PaletteOptions["primary"];
    backgroundDarken?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    textDark: true;
    textGrey: true;
    accentRed: true;
    accentGrey: true;
    backgroundDarken: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    textDark: true;
    textGrey: true;
    accentRed: true;
    accentGrey: true;
    backgroundDarken: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    textDark: true;
    textGrey: true;
    accentRed: true;
    accentGrey: true;
    backgroundDarken: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    textDark: true;
    textGrey: true;
    accentRed: true;
    accentGrey: true;
    backgroundDarken: true;
  }
}

declare module "@mui/material/Card" {
  interface CardPropsColorOverrides {
    textDark: true;
    textGrey: true;
    accentRed: true;
    accentGrey: true;
    backgroundDarken: true;
  }
}
