import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import KeyWordTable from "./Table";
import TrendAnalytics from "./TrendAnalytics";
import { useRecoilState } from "recoil";
import { keyWordState } from "./atom";

const KeyWord = () => {
  const [keyword, setKeyword] = useState("");
  const [dummy, setDummy] = useRecoilState(keyWordState);

  const fetchDummy = () => {
    fetch("http://127.0.0.1:8000/keyword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword: keyword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let updatedDummy = [];
        for (let i in data) {
          updatedDummy.push({
            date: data[i][0],
            "1p 윙 상품 비율": data[i][1],
            "1p 윙 상품 수": data[i][2],
            "1p 로켓 상품 수": data[i][3],
            "1p 그로스 상품 수": data[i][4],
            "광고 비율": data[i][5],
            "광고 상품 수": data[i][6],
            "광고 구좌 수": data[i][7],
            "로켓 비율": data[i][8],
            "로켓 상품 수": data[i][9],
            "전체 상품 수": data[i][10],
            "1p 평균 리뷰 수": data[i][11],
            "1p 최대 리뷰 수": data[i][12],
            "1p 중간 리뷰 수": data[i][13],
            "1p 최소 리뷰 수": data[i][14],
            "1p 평균 판매가": data[i][15],
            "1p 최고 판매가": data[i][16],
            "1p 중간 판매가": data[i][17],
            "1p 최소 판매가": data[i][18],
          });
        }
        setDummy(updatedDummy);
      });
  };

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
          onClick={fetchDummy}
        >
          키워드 분석
        </Button>
      </Grid>
      <hr style={{ width: "100%", marginTop: "1rem" }} />
      <KeyWordTable />
      <hr style={{ width: "100%", marginTop: "1rem" }} />
      {dummy.length !== 0 ? (
        <TrendAnalytics />
      ) : (
        <Paper
          sx={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            아직 날짜별 추이 분석이 존재하지 않아요. 😢 <br />
            지금 바로 분석을 요청해보세요!
          </Typography>
          <Button>오늘부터 날짜별 추이 분석하기</Button>
        </Paper>
      )}
    </Container>
  );
};

export default KeyWord;
