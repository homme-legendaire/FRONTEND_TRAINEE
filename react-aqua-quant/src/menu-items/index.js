// assets
import { Layout, Gauge, List, Settings } from "tabler-icons-react";

const icons = {
  IconLayout: Layout,
  IconGauge: Gauge,
  IconList: List,
  IconSettings: Settings,
};

const menuItems = {
  items: [
    {
      id: "dashboard",
      // title: 'Dashboard',
      type: "group",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard",
          icon: icons.IconLayout,
          breadcrumbs: false,
        },
        {
          id: "bots",
          title: "Bots",
          type: "item",
          url: "/bots",
          icon: icons.IconGauge,
          breadcrumbs: false,
        },
        {
          id: "orderHistory",
          title: "OrderHistory",
          type: "item",
          url: "/orderHistory",
          icon: icons.IconList,
          breadcrumbs: false,
        },
        {
          id: "settings",
          title: "Settings",
          type: "item",
          url: "/settings",
          icon: icons.IconSettings,
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default menuItems;
