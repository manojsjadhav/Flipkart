import React, { useEffect } from "react";
import { Box, makeStyles, Typography,Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { removFromCart } from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyle = makeStyles({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
  },
  Leftcomponent: {
    width: "67%",
  },
  Rightcomponent: {
    width:'33%',
    padding:'0 0 0 15px '
  },
  header: {
    padding: "15px 24px",
    background: "#FFF",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
});

const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const removeItemFromCart = (id) => {
    dispatch(removFromCart(id));
  };

  const buyNow = () => {};

  return (
    <>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.Leftcomponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWigdth: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                variant="contained"
                className={classes.placeOrder}
              >
                Place Order
              </Button>
            </Box>
          </Box>
          <Box className={classes.Rightcomponent}>
            <TotalView cartItems={cartItems} />
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
