import React from "react";
import Grid from "@mui/material/Grid";

import "./adbooks.css";
import adbooksIphone from "./phones/adbooksIphone.png";
import adbookslogo from "./logos/adbookslogo.png";
import adbook1 from "./icons/adbook1.png";
import adbook2 from "./icons/adbook2.png";
import adbook3 from "./icons/adbook3.png";
import adbook4 from "./icons/adbook4.png";
import adbook5 from "./icons/adbook5.png";
import adbook6 from "./icons/adbook6.png";

function adbooks() {
  return (
    <Grid container className="FullContainer2">
      <Grid item xs={12} md={6} className="Left">
        <img src={adbookslogo} className="adbooks" alt="adbooks" />
        <p className="headingab">CONNECT WITH THE MARKET</p>
        <p className="subheadingab">
          A guidebook to Connect with Industry Leaders, Companies and Vendors.
          Share knowledge and achieve goals!
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="Right">
        <img src={adbooksIphone} className="iphone" alt="iphone" />
        <img src={adbook1} className="adbook1" alt="adbook1" />
        <img src={adbook2} className="adbook2" alt="adbook2" />
        <img src={adbook3} className="adbook3" alt="adbook3" />
        <img src={adbook4} className="adbook4" alt="adbook4" />
        <img src={adbook5} className="adbook5" alt="adbook5" />
        <img src={adbook6} className="adbook6" alt="adbook6" />
      </Grid>
    </Grid>
  );
}

export default adbooks;
