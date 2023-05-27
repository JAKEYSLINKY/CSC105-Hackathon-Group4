import React, { useState } from "react";
import { Box, Button, IconButton, Slider } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import rainSound from "../audio/rain.mp3";
import waveSound from "../audio/waves.mp3";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function SoundPlayer() {
  const [volumeRain, setVolumeRain] = useState(45);
  const [volumeWave, setVolumeWave] = useState(45);
  const [isRainPlaying, setIsRainPlaying] = useState(false);
  const [isWavePlaying, setIsWavePlaying] = useState(false);
  const [blue, setIsBlue] = useState("blue");

  const handleVolumeRainChange = (_, value) => {
    setVolumeRain(value);
    const audioRain = document.getElementById("audio-rain");
    audioRain.volume = value / 100;
  };

  const handleVolumeWaveChange = (_, value) => {
    setVolumeWave(value);
    const audioWave = document.getElementById("audio-wave");
    audioWave.volume = value / 100;
  };

  const toggleRainPlaying = () => {
    setIsRainPlaying(!isRainPlaying);
    const audioRain = document.getElementById("audio-rain");
    if (isRainPlaying) {
      audioRain.pause();
    } else {
      audioRain.play();
    }
  };

  const toggleWavePlaying = () => {
    setIsWavePlaying(!isWavePlaying);
    const audioWave = document.getElementById("audio-wave");
    if (isWavePlaying) {
      audioWave.pause();
    } else {
      audioWave.play();
    }
  };

  const sliderBoxStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    
  };

  const sliderStyle = {
    width: "70%",
    marginBottom: "10px",
    alignItems: "center",
    marginTop: "10px",
    marginRight: "5%"
  };

  const buttonStyle = {
    width: "80%",
    height: "50px",
    marginBottom: "10px",
    borderRadius: "30px",
  };

  const playerBox = {
    bgcolor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  };

  const headerStyle = {
    padding: "5px",
    paddingTop: "0",
  };

  const iconStyle = {
    width: "55px",
    height: "55px",
    // marginRight: "10px"
  };
  return (
    <Box sx={playerBox}>
      <h1 style={headerStyle}>Sound Player</h1>
      <Box sx={sliderBoxStyle}>
        <audio id="audio-rain" src={rainSound} autoPlay loop />
        <IconButton sx={iconStyle} onClick={toggleRainPlaying}>
          {isRainPlaying ? (
            <VolumeUpIcon />
          ) : (
            <VolumeOffIcon />
          )}
        </IconButton>
        <Slider
          value={volumeRain}
          onChange={handleVolumeRainChange}
          aria-labelledby="rain-volume-slider"
          min={0}
          max={100}
          step={1}
          sx={sliderStyle}
        />
      </Box>
      <Box sx={sliderBoxStyle}>
        <audio id="audio-wave" src={waveSound} autoPlay loop />
        <IconButton sx={iconStyle} onClick={toggleWavePlaying}>
          {isWavePlaying ? (
            <VolumeUpIcon />
          ) : (
            <VolumeOffIcon />
          )}
        </IconButton>
        <Slider
          value={volumeWave}
          onChange={handleVolumeWaveChange}
          aria-labelledby="wave-volume-slider"
          min={0}
          max={100}
          step={1}
          sx={sliderStyle}
        />
      </Box>
      <h1 style={headerStyle}>Category</h1>
      <Button variant="contained" sx={buttonStyle}  onClick={() => setIsBlue("blue")}>
        Blue
      </Button>
      <Button variant="contained" sx={buttonStyle} onClick={() => setIsBlue("not blue")}>
        Not Blue
      </Button>
      <br />
    </Box>
  );
}

export default SoundPlayer;
