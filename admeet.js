import React from "react";
import "./admeet.css";
import { Grid } from "@mui/material";
import admeetIphone from "./phones/admeetIphone.png";
import admeetLogo from "./logos/admeetlogo.png";
import admeet1 from "./icons/admeet1.png";
import admeet2 from "./icons/admeet2.png";
import admeet3 from "./icons/admeet3.png";
import admeet4 from "./icons/admeet4.png";
function admeet() {
  return (
    <Grid container className="FullContainer3">
      <Grid item xs={12} md={6} className="Right3" order={{ xs: 1, md: 2 }}>
        <img src={admeetLogo} className="admeetLogo" alt="admeetLogo" />
        <p className="admH">INSPIRING MARKETING EVENTS & MEET UPS</p>
        <p className="admSH">
          Connect, learn and have fun with like minded marketers worldwide at
          various events.
        </p>
      </Grid>

      <Grid item xs={12} md={6} className="Left3" order={{ xs: 2, md: 1 }}>
        <img src={admeetIphone} className="admeetIphone" alt="admeetIphone" />
        <img src={admeet1} className="admeet1" alt="admeet1" />
        <img src={admeet2} className="admeet2" alt="admeet2" />
        <img src={admeet3} className="admeet3" alt="admeet3" />
        <img src={admeet4} className="admeet4" alt="admeet4" />
      </Grid>
    </Grid>
  );
}

export default admeet;
