import React from "react";
import Grid from "@mui/material/Grid";
import badge1 from "./adstreetbadge.png";
import scrollDown from "./arrowDown.png";
import "./badge.css";

function Badge() {
  return (
    <Grid
      container
      className="BadgeContainer"
      direction="row"
      justifyContent="center"
    >
      <Grid item xs={12} md={4} className="IconGrid">
        <div className="AdstreetIcon">
          <img src={badge1} className="AdstreetBadge" alt="AdstreetIcon" />
        </div>
      </Grid>
      <Grid item xs={12} md={8} className="TextGrid">
        <div className="Text">
          <p className="BoldText">YOUR ADVENTURE STARTS HERE</p>
          <p className="NormText">
            Scroll Down to Uncover AdStreet's Features!
          </p>
          <div className="ScrollDown">
            <img src={scrollDown} alt="scrollDownButton" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Badge;
