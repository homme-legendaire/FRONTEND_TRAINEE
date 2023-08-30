import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TrendAnalyticsState, keyWordState } from "./atom";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Chart from "./AreaChart";

const TrendAnalytics = () => {
  const [trend, setTrend] = useRecoilState(TrendAnalyticsState);
  const keyWordData = useRecoilValue(keyWordState);
  const [column, setColumn] = useState("wingRatio1p");

  return (
    <Grid
      sx={{
        marginTop: "1rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {trend ? (
        <Paper
          sx={{
            width: "95%",
            padding: "1rem",
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="h4">날짜별 추이 분석</Typography>
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={column}
                  onChange={(e) => {
                    setColumn(e.target.value);
                  }}
                >
                  {Object.keys(keyWordData[0])?.map((data) => {
                    if (data !== "date") {
                      return (
                        <MenuItem key={data} value={data}>
                          {data}
                        </MenuItem>
                      );
                    }
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Chart select={column} />
        </Paper>
      ) : (
        <Paper
          sx={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            아직 날짜별 추이 분석이 존재하지 않아요. 😢 <br />
            지금 바로 분석을 요청해보세요!
          </Typography>
          <Button onClick={() => setTrend(true)}>
            오늘부터 날짜별 추이 분석하기
          </Button>
        </Paper>
      )}
    </Grid>
  );
};

export default TrendAnalytics;
