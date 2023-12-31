// material-ui
import { Divider, List, Typography } from "@mui/material";

import theme from "../../../../../themes";

// project imports
import NavItem from "../NavItem";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List>{items}</List>
      {/* group divider */}
      <Divider variant="middle" sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
