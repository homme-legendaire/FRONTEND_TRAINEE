import { Outlet } from "react-router-dom";

// material-ui
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  CssBaseline,
  Modal,
  Toolbar,
  Typography,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";

import { FormattedMessage } from "react-intl";

import theme from "../../themes";

// recoil
import { useRecoilState } from "recoil";
import { customizationState } from "../../atom";

// project imports
import Breadcrumbs from "../../ui-component/extended/Breadcrumbs";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import navigation from "../../menu-items";

// assets
import { ChevronRight, Logout } from "tabler-icons-react";

// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create(
      // 사이드바 열고 닫을때 트랜지션 효과
      "margin",
      open
        ? {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }
        : {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }
    ),
    [theme.breakpoints.up("md")]: {
      marginLeft: open ? 0 : -240,
      width: `calc(100% - ${260}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      width: `calc(100% - ${260}px)`,
      padding: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${260}px)`,
      padding: "12px",
      marginRight: "10px",
    },
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  // Handle left drawer
  const [customization, setCustomization] = useRecoilState(customizationState);
  const handleLeftDrawerToggle = () => {
    setCustomization({ ...customization, opened: !customization.opened });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Modal
        open={customization.logoutModalOpened}
        onClose={() =>
          setCustomization({ ...customization, logoutModalOpened: false })
        }
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <Logout size="4rem" color={theme.palette.custom.red} />
          <Typography
            my={2}
            sx={{
              ...theme.typography.body1,
              fontSize: "1rem",
              color: "#585858",
            }}
          >
            <FormattedMessage id="Do you want to log out?" />
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              disableRipple
              sx={{
                borderRadius: "8px",
                backgroundColor: "inherit",
                fontSize: "1rem",
                fontWeight: 600,
                color: theme.palette.custom.medium,
                py: "12px",
                px: "45px",
                "&:hover": {
                  color: "#FFF",
                  background: theme.palette.custom.red,
                },
              }}
              onClick={() =>
                setCustomization({ ...customization, logoutModalOpened: false })
              }
            >
              <FormattedMessage id="Cancel" />
            </Button>
            <Button
              disableRipple
              sx={{
                borderRadius: "8px",
                backgroundColor: "inherit",
                fontSize: "1rem",
                fontWeight: 600,
                color: theme.palette.custom.medium,
                py: "12px",
                px: "45px",
                textTransform: "none",
                "&:hover": {
                  color: "#FFF",
                  background: theme.palette.custom.red,
                },
              }}
            >
              <FormattedMessage id="Log out" />
            </Button>
          </Grid>
        </Box>
      </Modal>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: customization.opened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={!matchDownMd ? customization.opened : !customization.opened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={customization.opened}>
        {/* breadcrumb */}
        <Breadcrumbs
          separator={ChevronRight}
          navigation={navigation}
          icon
          title
          rightAlign
        />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
