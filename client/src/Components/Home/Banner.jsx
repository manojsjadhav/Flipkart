import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constant/data";

const useStyle = makeStyles({
  container: {},
  image: {
    width: "100%",
    height: 280,
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      className={classes.container}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} alt="" />
      ))}
    </Carousel>
  );
};

export default Banner;
