import React from "react";
import { Grid } from "@mui/material";
import "./adleaks.css";
import adleaksIphone from "./phones/adleaksIphone.png";
import adleaksLogo from "./logos/adleakslogo.png";
import speaker from "./icons/speaker.png";
import radio from "./icons/radio.png";
import newspaper1 from "./icons/newspaper.png";
import newspaper2 from "./icons/newspaper2.png";
import newspaper3 from "./icons/newspaper3.png";
import newspaper4 from "./icons/newspaper4.png";

function adleaks() {
  return (
    <Grid container className="FullContainer1">
      {/* Order changed based on screen size */}
      <Grid item xs={12} md={6} className="Right1" order={{ xs: 1, md: 2 }}>
        <img src={adleaksLogo} className="adleakslogo" alt="adleakslogo" />
        <p className="adlH">LATEST NEWS, UPDATES & GOSSIP</p>
        <p className="adlSH">
          Stay ahead of the curve with AdLeaks' industry news.
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="Left1" order={{ xs: 2, md: 1 }}>
        <img
          src={adleaksIphone}
          className="adleaksIphone"
          alt="adleaksIphone"
        />
        <img src={speaker} className="speaker" alt="speaker" />
        <img src={radio} className="radio" alt="radio" />
        <img src={newspaper1} className="newspaper1" alt="newspaper1" />
        <img src={newspaper2} className="newspaper2" alt="newspaper2" />
        <img src={newspaper3} className="newspaper3" alt="newspaper3" />
        <img src={newspaper4} className="newspaper4" alt="newpaper" />
      </Grid>
    </Grid>
  );
}

export default adleaks;
