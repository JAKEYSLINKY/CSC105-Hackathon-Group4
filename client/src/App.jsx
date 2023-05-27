import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import Message from "./pages/Message";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Axios from "./AxiosInstance";
import { Box } from "@mui/material";
import Loading from "./components/Loading";

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

  const fetchData = async () => {
    Axios.get("/check")
      .then((res) => {
        setIsLogin(res.data.success);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(error);
      });
  };

  if (isLoading) {
      return <><Loading /></>
  }
  return (
    <div style={{ position: "fixed", top: "0", left: "0" }}>
      {isLogin ? (
        <>
          <NavBar />
          <Box display={"flex"} justifyContent={"center"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Message" element={<Message />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </Box>
        </>
      ) : (
        <Routes>
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/*" element={<Navigate to={"/Login"} replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
