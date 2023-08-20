import { Box, Container, Grid, Paper } from "@mui/material";
import "./App.css";
import GimpTable from "./Table";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Container>
        <GimpTable />
      </Container>
    </RecoilRoot>
  );
}

export default App;
