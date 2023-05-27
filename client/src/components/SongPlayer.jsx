import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import Axios from "../AxiosInstance";
import Loading from "./Loading";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ReactPlayer from "react-player";

function SongPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(40);

  useEffect(() => {
    fetchData();
    const savedPlaylist = localStorage.getItem("playlist");
    if (savedPlaylist) {
      setPlaylist(JSON.parse(savedPlaylist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const fetchData = async () => {
    try {
      const response = await Axios.get("/showsong");
      if (response.data.length === 0) {
        return;
      }
      setPlaylist(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const previousIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(previousIndex);
    setIsPlaying(true);
  };

  const playerBox = {
    bgcolor: "rgba(255,255,255,0.5);",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  };

  const iconStyle = {
    fontSize: "40px",
  };

  const imgStyle = {
    maxWidth: "400px",
    width: "80%"
  }

  if (isLoading || playlist.length === 0) {
    return (
      <Box sx={playerBox}>
        <Loading />
      </Box>
    );
  }

  const currentSong = playlist[currentSongIndex];

  return (
    <Box sx={playerBox}>
      <br />
      <br />
      <img src={currentSong.img_url} style={imgStyle} />
      <ReactPlayer
        url={currentSong.song_url}
        playing={isPlaying}
        volume={volume}
        style={{display: "none"}}
      />
      <h1>{currentSong?.name ?? "Name"}</h1>
      <Box>
        <IconButton onClick={playPreviousSong}>
          <SkipPreviousIcon sx={iconStyle} />
        </IconButton>
        <IconButton onClick={handlePlayPause}>
          {isPlaying ? <Pause sx={iconStyle} /> : <PlayArrow sx={iconStyle} />}
        </IconButton>
        <IconButton onClick={playNextSong}>
          <SkipNextIcon sx={iconStyle} />
        </IconButton>
      </Box>
      <h2>{currentSong?.artist ?? "Artist"}</h2>
      
    </Box>
  );
}

export default SongPlayer;
