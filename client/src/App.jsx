import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Axios from "./AxiosInstance";
import { Box } from "@mui/material";
import Loading from "./components/Loading";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = () => {
    setIsLogin(true);
    navigate("/");
  };

  const boxStyle = {
    overflowY: "auto",
    width: "calc(100vw - 17px - 2rem)",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
  };

  const fetchData = async () => {
    setIsLoading(true);
    Axios.get("/check")
      .then((res) => {
        setIsLogin(res.data.success);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Loading />
      </Box>
    );
  }

  return (
    <div>
      {isLogin ? (
        <>
          {window.location.pathname !== "/Error" && <NavBar />}
          <Box sx={boxStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Error" element={<Error />} />
              <Route path="/*" element={<Navigate to="/Error" replace />} />
            </Routes>
          </Box>
        </>
      ) : (
        <>
          <NavBar />
          <Box sx={boxStyle}>
            <Routes>
              <Route path="/Login" element={<Login onLogin={handleLogin} />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/*" element={<Navigate to="/Login" replace />} />
            </Routes>
          </Box>
        </>
      )}
    </div>
  );
}

export default App;
