import { FormattedMessage } from "react-intl";
import Asset from "./Asset";
import styles from "./Overview.module.css";
import Profit from "./Profit";
import MainCard from "../ui-component/cards/MainCard";
import { Divider, Grid, Typography } from "@mui/material";

import theme from "../themes";

const Overview = () => {
  return (
    <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid item>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: theme.palette.custom.main,
                }}
              >
                <FormattedMessage id="Overview" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Profit />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ paddingLeft: "10px", paddingRight: "10px" }}
        />
        <Asset />
      </Grid>
    </MainCard>
  );
};

export default Overview;
