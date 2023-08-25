// material-ui
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Trash } from "tabler-icons-react";

import { FormattedMessage } from "react-intl";
import theme from "../themes";

// styles
const ListItemWrapper = styled("div")(() => ({
  cursor: "pointer",
  padding: 16,
  "&:hover": {
    backgroundColor: theme.palette.custom.light,
  },
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = ({ messageList, deleteMessageHandler }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 330,
        height: "calc(50vh - 200px)",
        overflow: "scroll",
        py: 0,
        borderRadius: "10px",
        [theme.breakpoints.down("md")]: {
          maxWidth: 300,
        },
        "& .MuiListItemSecondaryAction-root": {
          top: 22,
        },
      }}
    >
      {messageList.length > 0 ? (
        messageList.map((message, index) => {
          return (
            <ListItemWrapper key={index}>
              <Grid container direction="column" className="list-container">
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.custom.heavy}
                  >
                    {message.content}
                  </Typography>
                </Grid>
                <ListItem alignItems="center">
                  <ListItemText
                    primary={
                      <Typography
                        variant="caption"
                        display="block"
                        color={theme.palette.custom.wellDone}
                      >
                        {message.time}
                      </Typography>
                    }
                  />
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      color: theme.palette.custom.wellDone,
                      backgroundColor: "inherit",
                    }}
                    onClick={deleteMessageHandler}
                  >
                    <Trash size="1rem" />
                  </ListItemIcon>
                </ListItem>
              </Grid>
            </ListItemWrapper>
          );
        })
      ) : (
        <Box sx={{ m: 16 }}>
          <Typography variant="subtitle2" color={theme.palette.custom.wellDone}>
            <FormattedMessage id="No message" />
          </Typography>
        </Box>
      )}
    </List>
  );
};

export default NotificationList;
