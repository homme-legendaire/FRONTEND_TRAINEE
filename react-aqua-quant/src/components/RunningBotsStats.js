import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MainCard from "../ui-component/cards/MainCard";
import { FormattedMessage } from "react-intl";

import theme from "../themes";

const createData = (name, ticker, win, lose, winRate, createdDate) => {
  return { name, ticker, win, lose, winRate, createdDate };
};

const rows = [
  createData("RSI 1h", "BTCUSDT", 130, 22, 85.2, "2023-07-17"),
  createData("Bollinger Band 2h", "ETHUSDT", 55, 7, 93.5, "2023-07-16"),
  createData("RSI 15m", "SOLUSDT", 1104, 135, 88.7, "2023-07-15"),
  createData("Dual Martin v3 4h", "DOGEUSDT", 4522, 12, 99.3, "2023-07-13"),
];

const RunningBotStats = () => {
  const currentDate = new Date();
  return (
    <MainCard>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            sx={{
              ...theme.typography.mainTitle,
              color: theme.palette.custom.main,
            }}
          >
            <FormattedMessage id="Running Bot Stats" />
          </Typography>
        </Grid>
        <TableContainer sx={{ height: "14.375rem" }}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  ".MuiTableCell-root": {
                    ...theme.typography.body1,
                    color: theme.palette.custom.wellDone,
                    p: "0.75rem",
                  },
                }}
              >
                <TableCell>
                  <FormattedMessage id="Name" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Ticker" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Win" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Lose" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Win Rate" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Created" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  hover
                  sx={{
                    ".MuiTableCell-root": {
                      ...theme.typography.body1,
                      color: theme.palette.custom.heavy,
                      p: "0.75rem",
                    },
                    "&.MuiTableRow-hover": {
                      "&:hover": {
                        backgroundColor: theme.palette.custom.lightBlue,
                      },
                    },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.ticker}</TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.custom.main + " !important",
                    }}
                  >
                    {row.win}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: theme.palette.custom.red + " !important",
                    }}
                  >
                    {row.lose}
                  </TableCell>
                  <TableCell>{row.winRate + "%"}</TableCell>
                  <TableCell>{row.createdDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </MainCard>
  );
};

export default RunningBotStats;
