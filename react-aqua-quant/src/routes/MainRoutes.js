import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import("../Dashboard")));
const BotsDefault = Loadable(lazy(() => import("../Bots")));
const OrderHistoryDefault = Loadable(lazy(() => import("../OrderHistory")));
const SettingsDefault = Loadable(lazy(() => import("../Settings")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "bots",
      element: <BotsDefault />,
    },
    {
      path: "orderHistory",
      element: <OrderHistoryDefault />,
    },
    {
      path: "settings",
      element: <SettingsDefault />,
    },
  ],
};

export default MainRoutes;
