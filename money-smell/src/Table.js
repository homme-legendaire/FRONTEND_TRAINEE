import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { useRecoilState } from "recoil";
import { keyWordState } from "./atom";

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "날짜",
  },
  {
    id: "wingRatio1p",
    numeric: true,
    disablePadding: true,
    label: "1p 윙 상품 비율",
  },
  {
    id: "wingCount1p",
    numeric: true,
    disablePadding: false,
    label: "1p 윙 상품 수",
  },
  {
    id: "rocketCount1p",
    numeric: true,
    disablePadding: false,
    label: "1p 로켓 상품 수",
  },
  {
    id: "growthCount1p",
    numeric: true,
    disablePadding: true,
    label: "1p 그로스 상품 수",
  },
  {
    id: "adsRatio",
    numeric: true,
    disablePadding: false,
    label: "광고 비율",
  },
  {
    id: "adsCount",
    numeric: true,
    disablePadding: false,
    label: "광고 상품 수",
  },
  {
    id: "adsPositionCount",
    numeric: true,
    disablePadding: true,
    label: "광고 구좌 수",
  },
  {
    id: "rocketRatio",
    numeric: true,
    disablePadding: false,
    label: "로켓 비율",
  },
  {
    id: "rocketCount",
    numeric: true,
    disablePadding: false,
    label: "로켓 상품 수",
  },
  {
    id: "totalCount",
    numeric: true,
    disablePadding: true,
    label: "전체 상품 수",
  },
  {
    id: "averageReviewCount1p",
    numeric: true,
    disablePadding: false,
    label: "1p 평균 리뷰 수",
  },
  {
    id: "maxReviewCount1p",
    numeric: true,
    disablePadding: false,
    label: "1p 최대 리뷰 수",
  },
  {
    id: "midReviewCount1p",
    numeric: true,
    disablePadding: true,
    label: "1p 중간 리뷰 수",
  },
  {
    id: "minReviewCount1p",
    numeric: true,
    disablePadding: false,
    label: "1p 최소 리뷰 수",
  },
  {
    id: "averagePrice1p",
    numeric: true,
    disablePadding: false,
    label: "1p 평균 판매가",
  },
  {
    id: "maxPrice1p",
    numeric: true,
    disablePadding: true,
    label: "1p 최고 판매가",
  },
  {
    id: "midPrice1p",
    numeric: true,
    disablePadding: false,
    label: "1p 중간 판매가",
  },
  {
    id: "minPrice1p",
    numeric: true,
    disablePadding: false,
    label: "1p 최저 판매가",
  },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{
        ".MuiTableCell-root": {
          width: "100%",
          whiteSpace: "nowrap",
        },
      }}
    >
      <TableRow>
        <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

const KeyWordTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("date");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useRecoilState(keyWordState);

  useLayoutEffect(() => {
    fetchTickerPrice();
  }, []);

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  const fetchTickerPrice = () => {
    // fetch("https://api.aqua-quant.com/fetchPrice", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let tickerPriceList = data.quote;
    //     let updatedRows = [...rows];
    //     for (let tickerPrice in tickerPriceList) {
    //       console.log(tickerPrice);
    //       const indexToUpdate = updatedRows.findIndex(
    //         (row) => row.ticker === tickerPrice
    //       );
    //       if (indexToUpdate !== -1) {
    //         updatedRows[indexToUpdate] = {
    //           ...updatedRows[indexToUpdate],
    //           upbitPrice: tickerPriceList[tickerPrice].KRW,
    //           binancePrice: tickerPriceList[tickerPrice].USDT,
    //         };
    //       } else {
    //         updatedRows.push({
    //           ticker: tickerPrice,
    //           upbitPrice: tickerPriceList[tickerPrice].KRW,
    //           binancePrice: tickerPriceList[tickerPrice].USDT,
    //         });
    //       }
    //     }
    //     setRows(updatedRows);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.date}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    <TableCell />
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell align="right">
                      {row["1p 윙 상품 비율"]}
                    </TableCell>
                    <TableCell align="right">{row["1p 윙 상품 수"]}</TableCell>
                    <TableCell align="right">
                      {row["1p 로켓 상품 수"]}
                    </TableCell>
                    <TableCell align="right">
                      {row["1p 그로스 상품 수"]}
                    </TableCell>
                    <TableCell align="right">{row["광고 비율"]}</TableCell>
                    <TableCell align="right">{row["광고 상품 수"]}</TableCell>
                    <TableCell align="right">{row["광고 구좌 수"]}</TableCell>
                    <TableCell align="right">{row["로켓 비율"]}</TableCell>
                    <TableCell align="right">{row["로켓 상품 수"]}</TableCell>
                    <TableCell align="right">{row["전체 상품 수"]}</TableCell>
                    <TableCell align="right">
                      {row["1p 평균 리뷰 수"]}
                    </TableCell>
                    <TableCell align="right">
                      {row["1p 최대 리뷰 수"]}
                    </TableCell>
                    <TableCell align="right">
                      {row["1p 중간 리뷰 수"]}
                    </TableCell>
                    <TableCell align="right">
                      {row["1p 최소 리뷰 수"]}
                    </TableCell>
                    <TableCell align="right">{row["1p 평균 판매가"]}</TableCell>
                    <TableCell align="right">{row["1p 최고 판매가"]}</TableCell>
                    <TableCell align="right">{row["1p 중간 판매가"]}</TableCell>
                    <TableCell align="right">{row["1p 최소 판매가"]}</TableCell>
                    <TableCell />
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default KeyWordTable;
