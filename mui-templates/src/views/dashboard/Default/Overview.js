import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, IconButton, Typography } from '@mui/material';

// third-party
import ProfitAreaChart from './chart/ProfitAreaChart';
import AssetPieChart from './chart/AssetPieChart';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';

// chart data
import { FormattedMessage } from 'react-intl';
import { IconReload } from '@tabler/icons';

const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];
// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const Overview = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const [areaWidth, setAreaWidth] = useState(0);
  const [pieWidth, setPieWidth] = useState(0);
  const profitRef = useRef(null);
  const assetRef = useRef(null);

  const chartData = [
    { name: '31', profit: 10 },
    { name: '01', profit: 8 },
    { name: '02', profit: 27 },
    { name: '03', profit: 29 },
    { name: '04', profit: 36 },
    { name: '05', profit: 55 },
    { name: '06', profit: 65 },
    { name: '07', profit: 80 }
  ];
  const xTicks = ['31', '01', '02', '03', '04', '05', '06', '07']; // x축의 눈금 값 배열
  const yTicks = [0, 25, 50, 75, 100]; // y축의 눈금 값 배열

  // const { navType } = customization;
  // const { primary } = theme.palette.text;
  // const darkLight = theme.palette.dark.light;
  // const grey200 = theme.palette.grey[200];
  // const grey500 = theme.palette.grey[500];

  // const primary200 = theme.palette.primary[200];
  // const primaryDark = theme.palette.primary.dark;
  // const secondaryMain = theme.palette.secondary.main;
  // const secondaryLight = theme.palette.secondary.light;

  const [usdtAsset, setUsdtAsset] = useState(4875.58);
  const [krwAsset, setKrwAsset] = useState(6310560);

  const getParentWidth = () => {
    if (profitRef.current) {
      const parentWidth = profitRef.current.clientWidth * 0.95;
      return parentWidth;
    }
    return 0;
  };

  const getAssetWidth = () => {
    if (assetRef.current) {
      const assetWidth = assetRef.current.clientWidth * 0.5;
      return assetWidth;
    }

    return 0;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 차트의 너비를 업데이트
    setTimeout(() => {
      const handleResize = () => {
        const parentWidth = getParentWidth();
        const assetWidth = getAssetWidth();
        console.log('PARENT', assetWidth);
        setAreaWidth(parentWidth);
        setPieWidth(assetWidth);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  }, [profitRef]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item>
                <Grid item>
                  <Typography sx={{ fontSize: '24px', fontWeight: 600, color: theme.palette.primary.dark }}>
                    <FormattedMessage id="Overview" />
                  </Typography>
                </Grid>
                {/* <Grid item>
                  <Typography variant="subtitle2">
                    <FormattedMessage id="Total Growth" />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3">$2,324.00</Typography>
                </Grid> */}
              </Grid>
              {/* <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid> */}
            </Grid>
            <Grid item xs={12} lg={6.3}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ paddingLeft: '10px', paddingRight: '10px' }}
                ref={profitRef}
              >
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: '32px', fontWeight: 500, color: '#000' }}>95.15 USDT</Typography>
                </Grid>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: theme.palette.custom.welldone }}>
                      <FormattedMessage id="Profit(USDT)" />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, color: theme.palette.custom.medium }}>
                      <FormattedMessage id="1D" />
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, color: theme.palette.custom.medium }}>
                      <FormattedMessage id="1W" />
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, color: theme.palette.custom.medium }}>
                      <FormattedMessage id="1M" />
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, color: theme.palette.custom.medium }}>
                      <FormattedMessage id="1Y" />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item xs={12}>
                    <ProfitAreaChart data={chartData} xTicks={xTicks} yTicks={yTicks} width={areaWidth} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ paddingLeft: '10px', paddingRight: '10px' }} />
            <Grid item xs={12} lg={5.4}>
              <Grid container alignItems="center" justifyContent="space-between" ref={assetRef}>
                <Grid container alignItems="flex-end">
                  <Grid item>
                    <Typography sx={{ fontSize: '32px', fontWeight: '500' }}>{usdtAsset.toLocaleString()} USDT</Typography>
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <Typography sx={{ fontSize: '14px', fontWeight: '500', marginLeft: '1rem', marginBottom: '0.3rem' }}>
                        {krwAsset.toLocaleString()} KRW
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" color="#4073F2" sx={{ lineHeight: 1, padding: '3px' }}>
                  <IconButton color="inherit" size="small" disableRipple>
                    <IconReload size="16px" />
                  </IconButton>
                  <Grid item>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                      <FormattedMessage id="Update asset data" />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item xs={6}>
                    <AssetPieChart width={pieWidth} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

Overview.propTypes = {
  isLoading: PropTypes.bool
};

export default Overview;
