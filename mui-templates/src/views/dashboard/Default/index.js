import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import Overview from './Overview';
import RunningBotStats from './RunningBotStats';
import Positions from './Positions';
import Notice from './Notice';
import SmallEarningCard from './SmallEarningCard';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Overview isLoading={isLoading} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={7}>
            <RunningBotStats isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Notice isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={6} lg={7}>
            <Positions isLoading={isLoading} />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} lg={4}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid> */}
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={6}>
                <SmallEarningCard isLoading={isLoading} />
              </Grid>
              <Grid item xs={6}>
                <SmallEarningCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
