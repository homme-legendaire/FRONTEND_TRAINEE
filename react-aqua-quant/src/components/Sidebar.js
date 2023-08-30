// material-ui
import {
  Box,
  Button,
  ButtonBase,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";

import theme from "../themes";

// third-party
import { BrowserView, MobileView } from "react-device-detect";

// project imports
import MenuList from "../layout/MainLayout/Sidebar/MenuList";
import LogoSection from "../components/Logo";
import { FormattedMessage } from "react-intl";
import { Logout } from "tabler-icons-react";
import { useRecoilState } from "recoil";
import { customizationState } from "../atom";

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md")); // xl ls md
  const [customization, setCustomization] = useRecoilState(customizationState);

  const logoutModalHandler = () => {
    setCustomization({ ...customization, logoutModalOpened: true });
  };

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block" } }}>
        <Box sx={{ display: "flex", p: "8px", mx: "auto", ml: "16px" }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <div
          component="div"
          style={{
            height: "calc(100vh - 130px)",
            overflow: "scroll",
          }}
        >
          <MenuList />
          <Box
            height={350}
            mx="1rem"
            borderRadius="8px"
            mt={65}
            sx={{
              flexGrow: 1,
              background: "#FAFAFA",
            }}
          />
          <ButtonBase
            disableRipple
            sx={{
              borderRadius: "8px",
              backgroundColor: "inherit",
              pl: "16px",
              pr: "106px",
              py: "0.5rem",
              mx: "1.5rem",
              mt: "10px",
              fontWeight: 600,
              color: theme.palette.custom.wellDone,
              textTransform: "none",
              "&:hover": {
                background: "#FFEBEB",
                color: theme.palette.custom.red,
              },
            }}
            onClick={logoutModalHandler}
          >
            <Logout size="1.75rem" />
            <Typography
              variant="sideBarTitle"
              color="inherit"
              width="100%"
              sx={{ ml: "0.5rem" }}
            >
              <FormattedMessage id="Log out" />
            </Typography>
          </ButtonBase>
        </div>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
          <Box
            height={350}
            mx="1rem"
            borderRadius="8px"
            mt={30}
            sx={{
              flexGrow: 1,
              background: "#FAFAFA",
            }}
          />
          <ButtonBase
            disableRipple
            sx={{
              borderRadius: "8px",
              backgroundColor: "inherit",
              pl: "16px",
              pr: "66px",
              py: "0.5rem",
              mx: "1.5rem",
              mt: "10px",
              fontWeight: 600,
              color: theme.palette.custom.wellDone,
              textTransform: "none",
              "&:hover": {
                background: "#FFEBEB",
                color: theme.palette.custom.red,
              },
            }}
            onClick={logoutModalHandler}
          >
            <Logout size="2rem" />
            <Typography
              variant="sideBarTitle"
              color="inherit"
              width="100%"
              sx={{ ml: "0.5rem", whiteSpace: "nowrap" }}
            >
              <FormattedMessage id="Log out" />
            </Typography>
          </ButtonBase>
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? 260 : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "40px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
