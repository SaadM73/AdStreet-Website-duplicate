import React from "react";
import "./adread.css";
import Grid from "@mui/material/Grid";
import adreadIphone from "./phones/adreadIphone.png";
import adreadlogo from "./logos/adreadlogo.png";
import adread1 from "./icons/adread1.png";
import adread2 from "./icons/adread2.png";
import adread3 from "./icons/adread3.png";

function adread() {
  return (
    <Grid container className="FullContainer6">
      <Grid item xs={12} md={6} className="Left">
        <img src={adreadlogo} className="adread" alt="adread" />
        <p className="heading">INDUSTRY’S EXPERT OPINIONS</p>
        <p className="subheading">
          Unlock exclusive marketing insights and strategies from industry
          experts on AdRead.
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="Right">
        <img src={adreadIphone} className="iphone" alt="iphone" />
        <img src={adread1} className="adread1" alt="adread1" />
        <img src={adread2} className="adread2" alt="adread2" />
        <img src={adread3} className="adread3" alt="adread3" />
      </Grid>
    </Grid>
  );
}

export default adread;
