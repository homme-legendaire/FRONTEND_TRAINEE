// material-ui
import {
  Avatar,
  Box,
  ButtonBase,
  FormControlLabel,
  Typography,
} from "@mui/material";

import theme from "../themes";

// assets
import { Menu2, ChevronLeft, ChevronRight } from "tabler-icons-react";
import LogoSection from "./Logo";
import MessageCenter from "./MessageCenter";
import { useRecoilValue } from "recoil";
import { customizationState } from "../atom";

const Header = ({ handleLeftDrawerToggle }) => {
  console.log("THEME", theme);
  const customization = useRecoilValue(customizationState);

  return (
    <>
      <Box
        sx={{
          width: customization.opened ? 235 : 0,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
          transform: "translateX(0)",
          transition: "all .2s ease",
        }}
      ></Box>
      <ButtonBase
        disableRipple
        sx={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: "all .2s ease-in-out",
            background: "#fff",
            color: theme.palette.custom.wellDone,
            "&:hover": {
              background: theme.palette.custom.wellDone,
              color: "#fff",
            },
          }}
          onClick={handleLeftDrawerToggle}
          color="inherit"
        >
          <Menu2 size="1.1rem" />
        </Avatar>
      </ButtonBase>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      {/* Notification & Profile */}
      <MessageCenter />
      <FormControlLabel
        control={
          <Typography
            variant="body2"
            sx={{
              cursor: "default",
              color: theme.palette.custom.medium,
            }}
          >
            돌아온 병든튀김
          </Typography>
        }
        label=""
      />
    </>
  );
};

export default Header;
