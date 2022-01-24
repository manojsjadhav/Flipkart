import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { ImageURL } from "../../constant/data";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: 15,
    justifyContent: "space-between",
  },
});

const MidSection = () => {
  const classes = useStyle();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <React.Fragment>
      <Box className={classes.wrapper}>
        {ImageURL.map((image) => (
          <img src={image} alt="" style={{ width: "33%" }} />
        ))}
      </Box>
      <img src={coronaURL} alt="" style={{ width: "100%", marginTop: 15 }} />
    </React.Fragment>
  );
};

export default MidSection;
