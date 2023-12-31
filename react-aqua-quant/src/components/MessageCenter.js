import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MessageCenter.module.css";

// material-ui
import {
  Badge,
  Box,
  Button,
  ButtonBase,
  CardActions,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import theme from "../themes";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import MainCard from "../ui-component/cards/MainCard";
import Transitions from "../ui-component/extended/Transitions";
import NotificationList from "./NotificationList";

// assets
import { Bell } from "tabler-icons-react";

// ==============================|| NOTIFICATION ||============================== //

const MessageCenter = () => {
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
    {
      id: 2,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
    {
      id: 3,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
    {
      id: 4,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
    {
      id: 5,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
    {
      id: 6,
      content:
        "The 'RSI_BTCUSDT_15m' bot has been stopped due to shortage of margin. Change the setting of bot or add margin.",
      time: "2023-08-30 12:54",
    },
  ]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const deleteMessageHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down("md")]: {
            mr: 2,
          },
          ...theme.typography.commonBadge,
          ...theme.typography.mediumBadge,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .2s ease-in-out",
          background: "#fff",
          color: theme.palette.custom.wellDone,
          "&:hover": {
            background: theme.palette.custom.wellDone,
            color: "#fff",
          },
        }}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <ButtonBase disableRipple sx={{ borderRadius: "12px" }}>
          <Badge
            color="error"
            variant="dot"
            invisible={false}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size="1.1rem" />
          </Badge>
        </ButtonBase>
      </Box>
      <Popper
        placement={matchesXs ? "bottom" : "bottom-end"}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            position={matchesXs ? "top" : "top-right"}
            in={open}
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ pt: 2, px: 2 }}
                      >
                        <Grid item>
                          <Stack direction="row" spacing={2}>
                            <Typography variant="h4">Message Center</Typography>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <Typography
                            component={Link}
                            to="#"
                            variant="subtitle2"
                            color={theme.palette.custom.medium}
                            sx={{ textDecoration: "none" }}
                          >
                            Delete all
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <NotificationList
                        messageList={messageList}
                        deleteMessageHandler={deleteMessageHandler}
                      />
                    </Grid>
                  </Grid>
                  <Divider />
                  {/* <CardActions sx={{ p: 1.25, justifyContent: "center" }}>
                    <Button size="small" disableElevation>
                      View All
                    </Button>
                  </CardActions> */}
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default MessageCenter;
