// import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login";
import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const userDetailStr = JSON.stringify(userDetail);
    userDetail && sessionStorage.setItem("userDetail", userDetailStr);
  }, [!userDetail]);

  const getUserDetail = (details) => {
    setUserDetail(details);
  };

  const userDetailsStr = sessionStorage.getItem("userDetail");
  const userDetailsObject = JSON.parse(userDetailsStr);

  return (
    <div>
      {userDetailsObject ? (
        <List userDetail={userDetailsObject} setUserDetail={setUserDetail} />
      ) : (
        <div>
          <Login getUserDetail={getUserDetail} />
        </div>
      )}
    </div>
  );
}

export default App;
