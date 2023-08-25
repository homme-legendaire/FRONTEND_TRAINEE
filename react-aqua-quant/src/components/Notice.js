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

const createData = (title, author, createdDate) => {
  return { title, author, createdDate };
};

const rows = [
  createData("RSI 1h", "Inclease lab", "2023-07-17"),
  createData("Bollinger Band 2h", "Inclease lab", "2023-07-16"),
  createData("RSI 15m", "Inclease lab", "2023-07-16"),
];

const Notice = () => {
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
            <FormattedMessage id="Notice" />
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
                  <FormattedMessage id="Title" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Author" />
                </TableCell>
                <TableCell>
                  <FormattedMessage id="Created" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
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
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.author}</TableCell>
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

export default Notice;
