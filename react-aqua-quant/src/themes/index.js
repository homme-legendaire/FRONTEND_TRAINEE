import { createTheme } from "@mui/material/styles";

const themePalette = {
  custom: {
    heavy: "#323232",
    wellDone: "#767676",
    medium: "#a4a4a4",
    main: "#4073f2",
    regularLight: "#f0f0f0",
    lightBlue: "#f4f7ff",
    red: "#ff5252",
    light: "#f9f9f9",
    semiLight: "#CBCBCB",
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
          "&:hover": {
            backgroundColor: themePalette.custom.lightBlue,
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
    sideBarTitle: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    mainTitle: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    subTitle1: {
      fontWeigth: 500,
      fontSize: "2rem",
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
      fontSize: "0.875rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 600,
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
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
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
