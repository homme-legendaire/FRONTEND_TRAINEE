import { forwardRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// material-ui
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

import theme from "../../../../../themes";
import { useRecoilState } from "recoil";
import { customizationState } from "../../../../../atom";

// project imports
// import { MENU_OPEN, SET_MENU } from "store/actions";

// assets
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const { pathname } = useLocation();
  const [customization, setCustomization] = useRecoilState(customizationState);
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

  const Icon = item.icon;
  const itemIcon = item?.icon ? <Icon size="1.3rem" /> : null;

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      setCustomization({ ...customization, isOpen: [item.id] });
    }
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      disableRipple
      disabled={item.disabled}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        mx: `${level * 24}px`,
        fontWeight: 600,
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            // variant={
            //   customization.isOpen.findIndex((id) => id === item.id) > -1
            //     ? "sideBarTitle"
            //     : "body1"
            // }
            variant="sideBarTitle"
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
