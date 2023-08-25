import { Chip, Stack } from "@mui/material";
import MainCard from "../ui-component/cards/MainCard";

const Telegram = () => {
  return (
    <MainCard
      sx={{
        height: "267px",
      }}
    >
      <Stack direction="row" justifyContent="center">
        <Chip
          label="Telegram"
          disabled
          chipcolor="primary"
          size="small"
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </MainCard>
  );
};

export default Telegram;
