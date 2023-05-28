import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import SongPlayer from "../components/SongPlayer";
import SoundPlayer from "../components/SoundPlayer";
import ShowMessage from "../components/ShowMessage";
import CreateMessage from "../components/CreateMessage";
import MyMessages from "../components/MyMessages";
import Axios from "../AxiosInstance";

function Home() {
  const [isBlue, setIsBlue] = useState();
  const [message, setMessage] = useState([]);
  const boxColumn = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const fetchData = async () => {
    try {
      const response = await Axios.get("/showmsg", {
        params: {
          _cacheBuster: new Date().getTime(), // Append random query parameter to bypass cache
        },
      });
      setMessage(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isXs = window.innerWidth < 600;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isXs ? (
        <Grid container columns={24} order={1} pl={"3.1rem"}>
          <Grid item xs={24} sm={5} pl={"2%"}>
            <SongPlayer isBlue={isBlue} />
            <SoundPlayer setIsBlue={setIsBlue} />
          </Grid>
          <Grid item xs={24} sm={6} pr={"2%"} order={3}>
            <ShowMessage />
            <CreateMessage />
          </Grid>
          <Grid item xs={24} sm={5} pr={"2%"} order={4}>
            <MyMessages />
          </Grid>
        </Grid>
      ) : (
        <Grid container columns={24} order={1}>
          <Grid item xs={24} sm={5} pl={"2%"}>
            <SoundPlayer setIsBlue={setIsBlue} />
          </Grid>
          <Grid item xs={24} sm={8} order={2}>
            <Box sx={boxColumn}>
              <SongPlayer isBlue={isBlue} />
            </Box>
          </Grid>
          <Grid item xs={24} sm={6} pr={"2%"} order={3}>
            <ShowMessage />
            <CreateMessage setData={setMessage} />
          </Grid>
          <Grid item xs={24} sm={5} pr={"2%"} order={4}>
            <MyMessages message={message} setMessage={setMessage} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Home;
