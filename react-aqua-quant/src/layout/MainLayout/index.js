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
} from "@mui/material";

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
import { ChevronRight } from "tabler-icons-react";

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
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
