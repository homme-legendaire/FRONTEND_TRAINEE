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
import { useRecoilState } from "recoil";
import { noticeModalState } from "../atom";

const createData = (title, author, article, createdDate, id) => {
  return { title, author, article, createdDate, id };
};

const rows = [
  createData(
    "[시스템 점검 안내] 07/18 오전 5시...",
    "Inclease lab",
    "안녕하십니까.\n내일 오전 5시 부터 약 2시간 동안 시스템 점검이 진행됩니다.\n시스템 점검으로 인해 작동중인 매매 봇이 정지되는 일은 없을 것이나, 부득이한 경우 비정상적으로 동작할 가능성이 있으므로  해당 시간에는 작동중인 봇을 정지하시기를 권장합니다.\n시스템 점검이 완료된 이후에는 점검 완료 공지를 올릴 것이니 참고해주시기 바랍니다.\n아쿠아 퀀트를 이용해주시는 유저분들께 감사드립니다.\n\n인클리즈랩 올림",
    "2023-07-17",
    0
  ),
  createData(
    "[필독] 최초 로그인 후 해야할 것.",
    "Inclease lab",
    "안녕하십니까.\n내일 오전 5시 부터 약 2시간 동안 시스템 점검이 진행됩니다.\n시스템 점검으로 인해 작동중인 매매 봇이 정지되는 일은 없을 것이나, 부득이한 경우 비정상적으로 동작할 가능성이 있으므로  해당 시간에는 작동중인 봇을 정지하시기를 권장합니다.\n시스템 점검이 완료된 이후에는 점검 완료 공지를 올릴 것이니 참고해주시기 바랍니다.\n아쿠아 퀀트를 이용해주시는 유저분들께 감사드립니다.\n\n인클리즈랩 올림",
    "2023-07-16",
    1
  ),
  createData(
    "반갑습니다. 저희는 인클리즈랩...",
    "Inclease lab",
    "안녕하십니까.\n내일 오전 5시 부터 약 2시간 동안 시스템 점검이 진행됩니다.\n시스템 점검으로 인해 작동중인 매매 봇이 정지되는 일은 없을 것이나, 부득이한 경우 비정상적으로 동작할 가능성이 있으므로  해당 시간에는 작동중인 봇을 정지하시기를 권장합니다.\n시스템 점검이 완료된 이후에는 점검 완료 공지를 올릴 것이니 참고해주시기 바랍니다.\n아쿠아 퀀트를 이용해주시는 유저분들께 감사드립니다.\n\n인클리즈랩 올림",
    "2023-07-16",
    2
  ),
];

const Notice = () => {
  const [noticeModalopened, setNoticeModalOpened] =
    useRecoilState(noticeModalState);
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
                        cursor: "pointer",
                      },
                    },
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                  onClick={() => {
                    setNoticeModalOpened({
                      ...noticeModalopened,
                      opened: true,
                      id: row.id,
                    });
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
