import { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import KeyWordTable from "./Table";
import TrendAnalytics from "./TrendAnalytics";

const KeyWord = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <Container>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">키워드 분석</Typography>
        <Typography variant="subtitle1">키워드 별 쿠팡 내역 분석</Typography>
        <TextField
          label="키워드 검색"
          sx={{
            marginTop: "1rem",
          }}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <Button
          disableRipple
          sx={{
            marginTop: "1rem",
          }}
        >
          키워드 분석
        </Button>
      </Grid>
      <hr style={{ width: "100%", marginTop: "1rem" }} />
      <KeyWordTable />
      <hr style={{ width: "100%", marginTop: "1rem" }} />
      <TrendAnalytics />
    </Container>
  );
};

export default KeyWord;
