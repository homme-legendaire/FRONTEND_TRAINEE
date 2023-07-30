import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import SmallEarningCard from './SmallEarningCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <TotalGrowthBarChart isLoading={isLoading} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={7}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={5}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6} md={6} lg={7}>
            <EarningCard isLoading={isLoading} />
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
