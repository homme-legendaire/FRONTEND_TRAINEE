// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { IconTrash } from '@tabler/icons';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.custom.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
  const theme = useTheme();

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 330,
        py: 0,
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        }
      }}
    >
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper>
        <Grid container direction="column" className="list-container">
          <Grid item xs={12}>
            <Typography variant="subtitle2" color={theme.palette.custom.heavy}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Grid>
          <ListItem alignItems="center">
            <Grid container justifyContent="flex-end">
              <Grid item xs={12}>
                <Typography variant="caption" display="block" color={theme.palette.custom.welldone}>
                  2 min ago
                </Typography>
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: theme.palette.custom.welldone,
                  backgroundColor: 'inherit'
                }}
              >
                <IconTrash stroke={1.5} size="1rem" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </Grid>
      </ListItemWrapper>
    </List>
  );
};

export default NotificationList;
