import { Grid, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import theme from "./themes";
import MainCard from "./ui-component/cards/MainCard";

const Bots = () => {
  return (
    <Grid Container>
      <Grid item xs={12}>
        <MainCard
          sx={{
            p: "0px",
          }}
        >
          <Typography
            sx={{
              ...theme.typography.h1,
              fontSize: "2.25rem",
              color: theme.palette.custom.main,
            }}
          >
            <FormattedMessage id="Create your own bot!" />
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Bots;
