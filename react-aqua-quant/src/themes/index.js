import { createTheme } from "@mui/material/styles";
import componentStyleOverrides from "./compStyleOverride";

const themePalette = {
  custom: {
    heavy: "#323232",
    medium: "#a4a4a4",
    wellDone: "#767676",
    main: "#4073f2",
    regularLight: "#f0f0f0",
    red: "#ff5252",
  },
  error: {
    main: "#ff5252",
  },
};

const theme = createTheme({
  direction: "ltr",
  palette: themePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
          color: "black",
          "&$selected": {
            backgroundColor: themePalette.custom.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: themePalette.custom.main,
              color: "#fff",
            },
          },
          "&:hover": {
            backgroundColor: themePalette.custom.lightBlue,
            color: themePalette.custom.red,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: themePalette.custom.wellDone,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: "#fff",
            backgroundColor: themePalette.custom.main,
            "&:hover": {
              color: "#fff",
              backgroundColor: themePalette.custom.main,
            },
            "& .MuiListItemIcon-root": {
              color: "#fff",
            },
          },
          "&:hover": {
            backgroundColor: themePalette.custom.lightBlue,
            // color: theme.menuHover,
            // "& .MuiListItemIcon-root": {
            //   color: theme.menuHover,
            // },
          },
        },
        MuiPaper: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              backgroundImage: "none",
            },
            rounded: {
              borderRadius: "8px",
            },
          },
        },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: "40px",
      padding: "6px",
      "@media (min-width: 600px)": {
        minHeight: "40px",
      },
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
    },
    button: {
      textTransform: "capitalize",
    },
    mainContent: {
      backgroundColor: themePalette.custom.regularLight,
      width: "100%",
      minHeight: "calc(100vh - 45px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "45px",
      marginRight: "20px",
      borderRadius: "8px",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
    commonBadge: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallBadge: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumBadge: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeBadge: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
  },
});

export default theme;
