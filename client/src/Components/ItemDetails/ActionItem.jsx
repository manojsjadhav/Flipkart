import { Box, Button, makeStyles } from "@material-ui/core";
import React,{ useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { addToCart } from '../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const useStyle = makeStyles({
  leftContainer: {
    padding: "40px 0 0 80px",
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
});

const ActionItem = ({ product }) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { id } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const { cart } = useSelector((state) => state);
  console.log('cart',cart);

  return (
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} alt="" className={classes.productImage} />
      <br />
      <Button
        onClick={() => addItemToCart()}
        className={clsx(classes.button, classes.addToCart)}
        style={{ marginRight: 10, marginLeft:1 }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        // onClick={() => buyNow()}
        className={clsx(classes.button, classes.buyNow)}
        variant="contained"
      >
        <Flash />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
