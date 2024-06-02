import React from "react";
import Grid from "@mui/material/Grid";
import "./adguru.css";
import adguruIphone from "./phones/adguruIphone.png";
import adgurulogo from "./logos/adgurulogo.png";
import adguru1 from "./icons/adguru1.png";
import adguru2 from "./icons/adguru2.png";
import adguru3 from "./icons/adguru3.png";

function adguru() {
  return (
    <Grid container className="FullContainer4">
      <Grid item xs={12} md={6} className="LeftAG">
        <img src={adgurulogo} className="adguru" alt="adguru" />
        <p className="headingAG">TRAINING & DEVELOPMENT</p>
        <p className="subheadingAG">
          Unlock your true potential with AdGuru's advertising training programs
          by Market Leaders.
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="RightAG">
        <img src={adguruIphone} className="iphone" alt="iphone" />
        <img src={adguru1} className="adguru1" alt="adguru1" />
        <img src={adguru2} className="adguru2" alt="adguru2" />
        <img src={adguru3} className="adguru3" alt="adguru3" />
      </Grid>
    </Grid>
  );
}

export default adguru;
