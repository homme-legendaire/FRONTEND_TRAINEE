import { useState } from "react";
import { useRecoilValue } from "recoil";
import { keyWordState } from "./atom";
import {
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Chart from "./AreaChart";

const TrendAnalytics = () => {
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
    </Grid>
  );
};

export default TrendAnalytics;
