import React from "react";
import Grid from "@mui/material/Grid";
import adbazar from "./adbazaar.png";
import adbazariphone from "./adbazariphone.png";
import star from "./icons/red-icon2.png";
import bell from "./icons/bellicon.png";
import tick from "./icons/blueTick.png";
import msg from "./icons/msgIcon.png";
import mail from "./icons/mailIcon.png";
import dart from "./icons/dartIcon.png";
import "./adbazaar.css";

function Adbazaar() {
  return (
    <Grid container className="FullContainer" spacing={2}>
      <Grid item xs={12} md={6} className="Left">
        <img src={adbazar} className="adbazarLogo" alt="adbazar" />
        <p className="heading">ONE BUSINESS MARKETPLACE</p>
        <p className="subheading">
          AdBazaar, a revolutionary service like never before. Select and work
          with industry’s top marketing players, as per your timeline and
          demand.
        </p>
      </Grid>
      <Grid item xs={12} md={6} className="Right">
        <img src={adbazariphone} className="iphone" alt="iphone" />
        <img src={star} className="star" alt="star" />
        <img src={bell} className="bell" alt="bell" />
        <img src={tick} className="tick" alt="tick" />
        <img src={msg} className="msg" alt="msg" />
        <img src={dart} className="dart" alt="dart" />
        <img src={mail} className="mail" alt="mail" />
      </Grid>
    </Grid>
  );
}

export default Adbazaar;
