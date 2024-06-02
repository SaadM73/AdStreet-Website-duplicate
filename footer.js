import React from "react";
import Grid from "@mui/material/Grid";
import "./footer.css";
import fbLogo from "./logos/fbLogo.png";
import igLogo from "./logos/igLogo.png";
import twitterLogo from "./logos/twitterLogo.png";
import TiktokLogo from "./logos/tiktokLogo.png";
import LinkedInLogo from "./logos/LinkedInLogo.png";
import footerBadge from "./logos/footerlogo.png";

function footer() {
  return (
    <Grid container className="FtContainer">
      <Grid item xs={12} md={4} className="FLeft">
        <img src={footerBadge} className="footerBadge" alt="fb" />
        <p className="FH">WHAT WE DO</p>
        <p className="FSH">
          Whether you're a disruptor looking to make waves, a passionate
          marketer seeking growth or a brand ready to make a lasting impact,
          AdStreet is your gateway to success.
        </p>
      </Grid>
      <Grid item xs={12} md={4} className="FMiddle">
        <h4 className="Quick">QUICK LINKS</h4>
        <ul className="quicklist" >
          <li>Return to Top</li>
          <li>About us</li>
          <li>Sign Up</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </Grid>

      <Grid item xs={12} md={4} className="FRight">
        <h4 className="intouch">GET IN TOUCH</h4>
        <p className="ads">ADSTREET</p>
        <p className="ads">
          Level B, 1 C, Jami Commercial, Street 3, DHA, Phase VII, Karachi
        </p>
        <p className="ads">Phone: 021-34313245-48</p>
      </Grid>
    </Grid>
  );
}

export default footer;
