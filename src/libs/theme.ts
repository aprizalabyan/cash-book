import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#017E00" },
    secondary: {
      main: "#101421",
    },
    background: {
      default: "#F8F9FA",
    },
    backgroundDarken: {
      main: "#F0F3F6",
    },
    textDark: {
      main: "#2D3748",
    },
    textGrey: {
      main: "#A0AEC0",
    },
    accentRed: {
      main: "#E53E3E",
    },
    accentGrey: {
      main: "#D3D9E0",
    },
  },
  typography: {
    fontFamily: "var(--font-poppins)",
  },
});

export default theme;
