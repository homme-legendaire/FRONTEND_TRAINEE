import { FormattedMessage } from "react-intl";
import Asset from "./Asset";
import Profit from "./Profit";
import MainCard from "../ui-component/cards/MainCard";
import { Divider, Grid, Typography } from "@mui/material";

import theme from "../themes";

const Overview = () => {
  return (
    <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              ...theme.typography.mainTitle,
              color: theme.palette.custom.main,
            }}
          >
            <FormattedMessage id="Overview" />
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6.3} sx={{ paddingTop: "0px !important" }}>
          <Profit />
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ paddingLeft: "10px", paddingRight: "10px" }}
        />
        <Grid item xs={12} lg={5.4} sx={{ paddingTop: "0px !important" }}>
          <Asset />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Overview;
