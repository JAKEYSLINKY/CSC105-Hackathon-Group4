import { Box, Grid } from "@mui/material";
import React from "react";
import SongPlayer from "../components/SongPlayer";
import SoundPlayer from "../components/SoundPlayer";
import ShowMessage from "../components/ShowMessage";
import CreateMessage from "../components/CreateMessage";


function Home() {
  const boxColumn = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={8} pl={"10%"}>
        <Box sx={boxColumn}>
          <SongPlayer audioUrl="" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} pr={"10%"}>
        <SoundPlayer />
        <ShowMessage />
        <CreateMessage />
      </Grid>
    </Grid>
  );
}

export default Home;
