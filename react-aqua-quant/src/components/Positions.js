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

const createData = (
  side,
  ticker,
  leverage,
  quantity,
  roe,
  entryPrice,
  value
) => {
  return { side, ticker, leverage, quantity, roe, entryPrice, value };
};

const rows = [
  createData("Long", "BTCUSDT", 10, 0.05, 30.15, 30157.15, 15473.11),
  createData("Short", "ETHUSDT", 30, 0.2, -12.57, 1978.87, 7869.34),
];

const Positions = () => {
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
            <FormattedMessage id="Positions" />
          </Typography>
        </Grid>
        <TableContainer sx={{ height: "11.25rem" }}>
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
                  <FormattedMessage id="Side" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Ticker" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Leverage" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Quantity" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="ROE" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Entry Price" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Value" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ticker}
                  hover
                  sx={{
                    backgroundColor:
                      row.side === "Long" ? "#F0FFF4" : "#FFF9FD",
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
                  <TableCell
                    sx={{
                      color:
                        row.side === "Long"
                          ? "#2CBB54 !important"
                          : theme.palette.custom.red + "!important",
                    }}
                  >
                    {row.side}
                  </TableCell>
                  <TableCell>{row.ticker}</TableCell>
                  <TableCell>{row.leverage}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        row.roe >= 0
                          ? theme.palette.custom.main + "!important"
                          : theme.palette.custom.red + "!important",
                    }}
                  >
                    {row.roe}%
                  </TableCell>
                  <TableCell>{row.entryPrice}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </MainCard>
  );
};

export default Positions;
