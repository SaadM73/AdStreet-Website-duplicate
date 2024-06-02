import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import "./Welcome.css";
import IphoneShell from "./iphoneShell.png";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Image 3",
  },
];

function ImagesComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % imagesList.length
        );
        setIsTransitioning(false);
      }, 0); // Adjust this time to match the transition duration in CSS
    }, 3000); // Change delay time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [imagesList.length]);

  return (
    <div className="ImagesSlideShowContainer">
      {imagesList.length > 0 && (
        <img
          className={`ImagesSlideShow ${
            isTransitioning ? "transitioning" : ""
          }`}
          key={imagesList[currentImageIndex].id}
          src={imagesList[currentImageIndex].src}
          alt={imagesList[currentImageIndex].alt}
        />
      )}
    </div>
  );
}

function Welcome() {
  return (
    <Grid container className="Welcome">
      <Grid item xs={12} md={7} className="LEFTW">
        <h1 className="HeadingWE">
          WELCOME TO <span className="RedText">ADSTREET</span>
        </h1>
        <p className="SubHeadingWE">The Largest Advertising Marketplace</p>
        <p className="headingText">
          Revolutionize your marketing strategy with AdStreet! Seek or offer
          services, connect with industry leaders, access cutting edge tools,
          and experience the future of advertising today.
        </p>
        <Button className="waitlistButton">
          <a href="signup">JOIN THE WAITLIST</a>
        </Button>
      </Grid>
      <Grid item xs={12} md={5} className="IphoneContainer">
        <img src={IphoneShell} className="IphoneShell" alt="iphoneeshell" />
        <ImagesComponent />
      </Grid>
    </Grid>
  );
}
export default Welcome;
