import React from "react";
import "./adpro.css";
import { Grid } from "@mui/material";

import adproIphone from "./phones/adproIphone.png";
import adproLogo from "./logos/adprologo.png";
import adpro1 from "./icons/adpro1.png";
import adpro2 from "./icons/adpro2.png";
import adpro3 from "./icons/adpro3.png";
import adpro4 from "./icons/adpro4.png";
import adpro5 from "./icons/adpro5.png";
import adpro6 from "./icons/adpro6.png";
function adpro() {
  return (
    <Grid container className="FullContainer5">
      <Grid item xs={12} md={6} className="Rightap" order={{ xs: 1, md: 2 }}>
        <img src={adproLogo} className="adprologo" alt="adprologo" />
        <p className="adapH">ONE STOP ADVERTISING SHOP</p>
        <p className="adapSH">
          You’ll get all the marketing solutions tailored by AdPro Services,
          whatever and whenever!
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="Leftap" order={{ xs: 2, md: 1 }}>
        <img src={adproIphone} className="adproIphone" alt="adproIphone" />
        <img src={adpro1} className="adpro1" alt="adpro1" />
        <img src={adpro2} className="adpro2" alt="adpro2" />
        <img src={adpro3} className="adpro3" alt="adpro3" />
        <img src={adpro4} className="adpro4" alt="adpro4" />
        <img src={adpro5} className="adpro5" alt="adpro5" />
        <img src={adpro6} className="adpro6" alt="adpro6" />
      </Grid>
    </Grid>
  );
}

export default adpro;
