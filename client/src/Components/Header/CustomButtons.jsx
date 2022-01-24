import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LoginDialog from "../Login/login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./profile";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#FFFFFF",
      // fontSize: 12,
      alignItems: "center",
      // fontWeight: 600,
    },
  },
  container: {
    display: "flex",
  },
  login: {
    fontSize: 12,
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
  },
});

const CustomButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);
  console.log("prod",cartItems.length);

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          onClick={() => openLoginDialog()}
          className={classes.login}
        >
          Login
        </Button>
      )}
      <Typography style={{ marginTop: 4, cursor: "pointer" }}>More</Typography>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default CustomButtons;
