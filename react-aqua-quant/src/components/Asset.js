import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AssetPieChart from "./PieChart";
import { Reload } from "tabler-icons-react";

import theme from "../themes";

const Asset = () => {
  const [usdtAsset, setUsdtAsset] = useState(3300.26);
  const [krwAsset, setKrwAsset] = useState(4008661.65);
  const assetRef = useRef(null);
  const [lastUpdateDate, setLastUpdateDate] = useState("2023-07-17 03:32:16");
  const [chartData, setChartData] = useState([
    { name: "USDT", amount: 1812.15, value: 1812.15 },
    { name: "BTC", amount: 0.02, value: 682.55 },
    { name: "ETH", amount: 0.41, value: 580.78 },
    { name: "ETC", amount: 475, value: 224.78 },
  ]);

  const chartColor = [
    "#4D71FF",
    "#A6C9FF",
    "#C6B2FF",
    "#D2D2D2",
    "#90CAFF",
    "#92AAFF",
    "#83E1F1",
    "#CCCDE4",
    "#8BB7F8",
    "#69DDED",
  ];

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ paddingLeft: "10px", paddingRight: "10px" }}
      ref={assetRef}
    >
      <Grid container alignItems="flex-end">
        <Grid item>
          <Typography variant="subTitle1">
            {usdtAsset.toLocaleString()} USDT
          </Typography>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography
              sx={{
                ...theme.typography.body1,
                marginLeft: "1rem",
                marginBottom: "0.3rem",
                color: theme.palette.custom.wellDone,
              }}
            >
              {krwAsset.toLocaleString()} KRW
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        color="#4073F2"
        sx={{ lineHeight: 1, padding: "3px" }}
      >
        <IconButton color="inherit" size="small" disableRipple>
          <Reload size="1rem" />
        </IconButton>
        <Grid item>
          <Typography
            sx={{
              ...theme.typography.body1,
              color: theme.palette.custom.main,
            }}
            my={1}
          >
            <FormattedMessage id="Update asset data" />
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={7}>
        <AssetPieChart data={chartData} colors={chartColor} />
      </Grid>
      <Grid item xs={12} xl={5}>
        <List
          sx={{
            ...theme.typography.body1,
          }}
        >
          {chartData.map((value, index) => (
            <ListItem
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "0.1fr repeat(4, 1fr)",
                p: 0,
              }}
            >
              <svg width="12" height="12">
                <rect
                  width="12"
                  height="12"
                  fill={chartColor[index % chartColor.length]}
                />
              </svg>
              <ListItemText
                sx={{ textAlign: "center", color: "#585858" }}
                primary={value.name}
              />
              <ListItemText
                sx={{
                  textAlign: "right",
                  color: theme.palette.custom.wellDone,
                }}
                primary={value.amount.toFixed(2)}
              />
              <ListItemText
                sx={{
                  textAlign: "right",
                  color: theme.palette.custom.wellDone,
                }}
                primary={value.value.toFixed(2)}
              />
              <ListItemText
                sx={{
                  textAlign: "right",
                  color: theme.palette.custom.wellDone,
                }}
                primary={((value.value / usdtAsset) * 100).toFixed(2) + "%"}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 400,
            color: theme.palette.custom.wellDone,
          }}
        >
          <FormattedMessage id="Last update" />
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 400,
            color: theme.palette.custom.wellDone,
            marginLeft: "0.8rem",
          }}
        >
          {lastUpdateDate}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Asset;
