import { useState, useRef } from "react";
import { FormattedMessage } from "react-intl";

import ProfitAreaChart from "./AreaChart";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";

import theme from "../themes";
import { useRecoilValue } from "recoil";
import { customizationState } from "../atom";

const Profit = () => {
  const [totalProfit, setTotalProfit] = useState(95.15);
  const [accum, setAccum] = useState("1D");
  const profitRef = useRef(null);
  const [chartData, setChartData] = useState([
    { name: "31", profit: 10 },
    { name: "01", profit: 8 },
    { name: "02", profit: 27 },
    { name: "03", profit: 29 },
    { name: "04", profit: 36 },
    { name: "05", profit: 55 },
    { name: "06", profit: 65 },
    { name: "07", profit: 80 },
  ]);
  const xTicks = ["31", "01", "02", "03", "04", "05", "06", "07"]; // x축의 눈금 값 배열
  const yTicks = [0, 25, 50, 75, 100]; // y축의 눈금 값 배열

  // const customization = useRecoilValue(customizationState);

  const accumChangeHandler = (e) => {
    setAccum(e.target.id);
  };

  // const getParentWidth = () => {
  //   if (profitRef.current) {
  //     let parentWidth = profitRef.current.clientWidth * 0.99;
  //     return parentWidth;
  //   }
  //   return 0;
  // };

  // const handleResize = () => {
  //   const parentWidth = getParentWidth();
  //   setAreaWidth(parentWidth);
  // };

  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때마다 차트의 너비를 업데이트
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   // 부모의 너비가 변경될 때마다 차트의 너비를 업데이트
  //   handleResize();
  // }, [profitRef.current?.clientWidth, customization.isOpen]);

  return (
    <Grid item xs={12} lg={6.3}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingLeft: "10px", paddingRight: "10px" }}
        ref={profitRef}
      >
        <Grid item xs={12}>
          <Typography variant="subTitle1">{totalProfit} USDT</Typography>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography
              sx={{
                ...theme.typography.body1,
                color: theme.palette.custom.wellDone,
              }}
            >
              <FormattedMessage id="Profit (USDT)" />
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                ...theme.typography.body1,
                fontWeight: 700,
                p: 0,
                mx: "5px",
                "&:hover":
                  accum === "1D"
                    ? {
                        backgroundColor: theme.palette.custom.main,
                        color: "#fff",
                      }
                    : {
                        backgroundColor: theme.palette.custom.lightBlue,
                      },
                color: accum === "1D" ? "#fff" : theme.palette.custom.medium,
                backgroundColor:
                  accum === "1D" ? theme.palette.custom.main : "#fff",
              }}
              disableRipple
              id="1D"
              selected={accum === "1D"}
              onClick={accumChangeHandler}
            >
              <FormattedMessage id="1D" />
            </Button>
            <Button
              sx={{
                ...theme.typography.body1,
                fontWeight: 700,
                p: 0,
                mx: "5px",
                "&:hover":
                  accum === "1W"
                    ? {
                        backgroundColor: theme.palette.custom.main,
                        color: "#fff",
                      }
                    : {
                        backgroundColor: theme.palette.custom.lightBlue,
                      },
                color: accum === "1W" ? "#fff" : theme.palette.custom.medium,
                backgroundColor:
                  accum === "1W" ? theme.palette.custom.main : "#fff",
              }}
              disableRipple
              id="1W"
              selected={accum === "1W"}
              onClick={accumChangeHandler}
            >
              <FormattedMessage id="1W" />
            </Button>
            <Button
              sx={{
                ...theme.typography.body1,
                fontWeight: 700,
                p: 0,
                mx: "5px",
                "&:hover":
                  accum === "1M"
                    ? {
                        backgroundColor: theme.palette.custom.main,
                        color: "#fff",
                      }
                    : {
                        backgroundColor: theme.palette.custom.lightBlue,
                      },
                color: accum === "1M" ? "#fff" : theme.palette.custom.medium,
                backgroundColor:
                  accum === "1M" ? theme.palette.custom.main : "#fff",
              }}
              disableRipple
              id="1M"
              selected={accum === "1M"}
              onClick={accumChangeHandler}
            >
              <FormattedMessage id="1M" />
            </Button>
            <Button
              sx={{
                ...theme.typography.body1,
                fontWeight: 700,
                p: 0,
                ml: "5px",
                "&:hover":
                  accum === "1Y"
                    ? {
                        backgroundColor: theme.palette.custom.main,
                        color: "#fff",
                      }
                    : {
                        backgroundColor: theme.palette.custom.lightBlue,
                      },
                color: accum === "1Y" ? "#fff" : theme.palette.custom.medium,
                backgroundColor:
                  accum === "1Y" ? theme.palette.custom.main : "#fff",
              }}
              disableRipple
              id="1Y"
              selected={accum === "1Y"}
              onClick={accumChangeHandler}
            >
              <FormattedMessage id="1Y" />
            </Button>
          </Grid>
        </Grid>
        <ProfitAreaChart data={chartData} xTicks={xTicks} yTicks={yTicks} />
      </Grid>
    </Grid>
  );
};

export default Profit;
