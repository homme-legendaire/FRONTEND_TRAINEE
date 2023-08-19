import { useEffect, useRef, useState } from "react";
import styles from "./Asset.module.css";
import { FormattedMessage } from "react-intl";
import { Grid, IconButton, Typography } from "@mui/material";
import AssetPieChart from "./PieChart";
import { Reload } from "tabler-icons-react";

import theme from "../themes";

const Asset = () => {
  const [usdtAsset, setUsdtAsset] = useState(4875.58);
  const [krwAsset, setKrwAsset] = useState(6310560);
  const assetRef = useRef(null);
  // const [pieWidth, setPieWidth] = useState(0);

  // const getAssetWidth = () => {
  //   if (assetRef.current) {
  //     const assetWidth = assetRef.current.clientWidth * 0.5;
  //     return assetWidth;
  //   }
  //   return 0;
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const handleResize = () => {
  //       const assetWidth = getAssetWidth();
  //       setPieWidth(assetWidth);
  //     };
  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   });
  // }, [assetRef]);

  return (
    // <div className={styles.mainContainer}>
    //   <div>
    //     <label className={styles.title}>
    //       {usdtAsset.toLocaleString()} USDT
    //     </label>
    //     <label className={styles.subTitle}>
    //       {krwAsset.toLocaleString()} KRW
    //     </label>
    //   </div>
    //   <div className={styles.updateBox}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="12"
    //       height="12"
    //       viewBox="0 0 12 12"
    //       fill="none"
    //     >
    //       <path
    //         d="M1 6C1 7.19347 1.47411 8.33807 2.31802 9.18198C3.16193 10.0259 4.30653 10.5 5.5 10.5C6.695 10.5 7.84 10.03 8.7 9.2L7.95 8.45C7.63511 8.78322 7.25522 9.04832 6.83382 9.22892C6.41242 9.40952 5.95846 9.50178 5.5 9.5C2.38 9.5 0.82 5.73 3.025 3.525C5.23 1.32 9 2.885 9 6H7.5L9.5 8H9.55L11.5 6H10C10 4.80653 9.52589 3.66193 8.68198 2.81802C7.83807 1.97411 6.69347 1.5 5.5 1.5C4.30653 1.5 3.16193 1.97411 2.31802 2.81802C1.47411 3.66193 1 4.80653 1 6Z"
    //         fill="#4073F2"
    //       />
    //     </svg>
    //     <label>
    //       <FormattedMessage id="Update asset data" />
    //     </label>
    //   </div>
    //   <Chart />
    // </div>
    <Grid item xs={12} lg={5.4}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        ref={assetRef}
      >
        <Grid container alignItems="flex-end">
          <Grid item>
            <Typography sx={{ fontSize: "32px", fontWeight: "500" }}>
              {usdtAsset.toLocaleString()} USDT
            </Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginLeft: "1rem",
                  marginBottom: "0.3rem",
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
            <Reload size="16px" />
          </IconButton>
          <Grid item>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: theme.palette.custom.main,
              }}
            >
              <FormattedMessage id="Update asset data" />
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={4} xs={12}>
          <AssetPieChart />
        </Grid>
        <Grid item sm={8} xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default Asset;
