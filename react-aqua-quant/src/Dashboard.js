import { Grid } from "@mui/material";
import Overview from "./components/Overview";
import RunningBotStats from "./components/RunningBotsStats";
import Notice from "./components/Notice";
import Positions from "./components/Positions";
import Telegram from "./components/Telegram";
import MainCard from "./ui-component/cards/MainCard";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Overview />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <RunningBotStats />
          </Grid>
          <Grid item xs={12} md={5}>
            <Notice />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={7}>
            <Positions />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Telegram />
              </Grid>
              <Grid item xs={6}>
                <MainCard sx={{ height: "267px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
