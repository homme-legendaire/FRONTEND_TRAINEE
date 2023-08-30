import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import KeyWord from "./Keyword";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Routes>
          <Route path={"/*"} element={<Navigate to="/login" replace />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/keyword"} element={<KeyWord />} />
        </Routes>
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
