import { Box, Grid } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import animationData from '../assets/whale.json'
function About() {
  const aboutStyle = {
    paddingRight: "6rem",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        {/* <Lottie options={defaultOptions} height={500} width={500} /> */}
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box sx={aboutStyle}>
          <div style={{lineHeight:"0.5"}}>
          <h2 style={{fontSize:"40px"}}>LONELY, FEEL BLUE? </h2>
          <h2 style={{fontSize:"24px",marginTop:"-30px"}}>WHAL 52Hz is here to be YOUR</h2>
          <h2 style={{fontSize:"24px",marginTop:"-20px"}}>BEST FRIEND ALONG SIDE.</h2>
          </div>

          <p className="Rokkitt" style={{marginTop:"20px"}}>
          The word "WHAL," which means whale in Thai, was inspired by tales of 52Hz, the world's loneliest whale. We intend for this website to serve as a haven on gloomy days.
Enjoy sorrowful songs and blue times while you're here at your leisure, and don't forget to grab some encouraging words from the sea bottle till you feel better.
Us, Whal developers recognize that we all live in the society that tending to be strong all the time is a must, But this is a kindly reminder that you’re safe to be blue here.
Take Care and Take time.
          </p>
          <h2 >SUPPORT US</h2>
          <p style={{marginTop:"-10px"}}>
          Buy us a Coffee Click To Paypal
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;