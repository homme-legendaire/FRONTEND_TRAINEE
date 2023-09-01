import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Overview from "./components/Overview";
import RunningBotStats from "./components/RunningBotsStats";
import Notice from "./components/Notice";
import Positions from "./components/Positions";
import Telegram from "./components/Telegram";
import MainCard from "./ui-component/cards/MainCard";
import { useRecoilState } from "recoil";
import { noticeModalState } from "./atom";
import { FormattedMessage } from "react-intl";
import theme from "./themes";

const Dashboard = () => {
  const [noticeModalopened, setNoticeModalOpened] =
    useRecoilState(noticeModalState);
  const viewer = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container spacing={3}>
      <Modal
        open={noticeModalopened.opened}
        onClose={() =>
          setNoticeModalOpened({
            ...noticeModalopened,
            opened: false,
          })
        }
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: viewer ? 600 : 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              ...theme.typography.body1,
              fontSize: viewer ? "1.25rem" : "1rem",
              color: theme.palette.custom.main,
            }}
          >
            [시스템 점검 안내] 07/18 오전 5시부터 약 2시간 동안 시스템 점검이
            진행됩니다.
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              my={2}
              sx={{
                ...theme.typography.body1,
                fontSize: viewer ? "0.75rem" : "0.5rem",
                color: theme.palette.custom.medium,
              }}
            >
              Inclease lab
            </Typography>
            <Typography
              my={2}
              sx={{
                ...theme.typography.body1,
                fontSize: viewer ? "0.75rem" : "0.5rem",
                color: theme.palette.custom.medium,
              }}
            >
              2023-07-17
            </Typography>
          </Grid>
          <Divider />
          <Typography
            my={2}
            sx={{
              ...theme.typography.body1,
              fontSize: viewer ? "0.875rem" : "0.75rem",
              color: "#585858",
            }}
          >
            안녕하십니까.
            <br />
            내일 오전 5시 부터 약 2시간 동안 시스템 점검이 진행됩니다.
            <br />
            시스템 점검으로 인해 작동중인 매매 봇이 정지되는 일은 없을 것이나,
            부득이한 경우 비정상적으로 동작할 가능성이 있으므로 해당 시간에는
            작동중인 봇을 정지하시기를 권장합니다.
            <br />
            시스템 점검이 완료된 이후에는 점검 완료 공지를 올릴 것이니
            참고해주시기 바랍니다.
            <br />
            아쿠아 퀀트를 이용해주시는 유저분들께 감사드립니다.
            <br />
            <br />
            인클리즈랩 올림,
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              disableRipple
              sx={{
                borderRadius: "8px",
                backgroundColor: "inherit",
                fontSize: viewer ? "1rem" : "0.75rem",
                fontWeight: 600,
                py: "8px",
                px: "30px",
                color: "#FFFFFF",
                background: theme.palette.custom.main,
                "&:hover": {
                  color: theme.palette.custom.medium,
                  background: theme.palette.custom.lightBlue,
                },
              }}
              onClick={() =>
                setNoticeModalOpened({
                  ...noticeModalopened,
                  opened: false,
                })
              }
            >
              <FormattedMessage id="Okay" />
            </Button>
          </Grid>
        </Box>
      </Modal>
      <Grid item xs={12}>
        <Overview />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <RunningBotStats />
          </Grid>
          <Grid item xs={12} md={5}>
            <Notice />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={7}>
            <Positions />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Telegram />
              </Grid>
              <Grid item xs={6}>
                <MainCard sx={{ height: "267px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
