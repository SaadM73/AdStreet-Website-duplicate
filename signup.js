import React from "react";
import { Grid, Button } from "@mui/material";
import "./signup.css";
import signUpBadge from "./signupbadge.png";

function Signup() {
  return (
    <Grid
      container
      className="SUFullContainer"
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="SULeft"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <img src={signUpBadge} className="signUpBadge" alt="signup" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="SURight"
        sx={{
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
        }}
      >
        <p className="SUHeading">Join the VIP Queue</p>
        <p className="SUSHeading">
          Reserve your spot on the waitlist for priority access.
        </p>
        <Button className="waitlistButtonSU">
          <a href="signup" className="waitlistLink">
            JOIN THE WAITLIST
          </a>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Signup;
