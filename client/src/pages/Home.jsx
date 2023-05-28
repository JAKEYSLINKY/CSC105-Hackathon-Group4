import { Box, Grid } from "@mui/material";
import React from "react";
import SongPlayer from "../components/SongPlayer";
import SoundPlayer from "../components/SoundPlayer";
import ShowMessage from "../components/ShowMessage";
import CreateMessage from "../components/CreateMessage";
import MyMessages from "../components/MyMessages";

function Home() {
  const boxColumn = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const isXs = window.innerWidth < 600;

  return (
    <>
      {isXs ? (
        <Grid container columns={24} order={1} pl={"3.1rem"}>
          <Grid item xs={24} sm={5} pl={"2%"}>
            <SongPlayer />
            <SoundPlayer />
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
            <SoundPlayer />
          </Grid>
          <Grid item xs={24} sm={8} order={2}>
            <Box sx={boxColumn}>
              <SongPlayer />
            </Box>
          </Grid>
          <Grid item xs={24} sm={6} pr={"2%"} order={3}>
            <ShowMessage />
            <CreateMessage />
          </Grid>
          <Grid item xs={24} sm={5} pr={"2%"} order={4}>
            <MyMessages />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Home;
