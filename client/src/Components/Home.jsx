import React, { useEffect } from "react";
import Banner from "./Home/Banner";
import NavBar from "./Home/NavBar";
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Home/Slide";
import MidSection from "./Home/MidSection";
// import { products } from "../constant/data";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products } = useSelector((state) => state.getProducts);
  // console.log(products);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "85%" }}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="=" style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts of You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
        <Slide timer={false} title="Bestseller" products={products} />
      </Box>
    </div>
  );
};

export default Home;
