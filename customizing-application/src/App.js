import { useRecoilValue } from "recoil";
import { userState } from "./atom";
import { firebaseApp } from "./FirebaseConfig";
import Login from "./Login";
import User from "./User";

const App = () => {
  const user = useRecoilValue(userState); // user 정보를 가져옴
  return <div>{user ? <User /> : <Login />}</div>;
};

export default App;
