import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "&>*": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    marginTop: 10,
    color: "#ff6161",
    fontWeight: 600,
    lineHeight: 0,
  },
});

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const initialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();

  const [account, toggleAccount] = useState(initialvalue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handClick = () => {
    setOpen(false);
    toggleAccount(initialvalue.login);
  };

  const toggleuserSignup = () => {
    toggleAccount(initialvalue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    const res = await authenticateSignup(signup);
    if (!res) return;
    handClick();
    setAccount(signup.username);
  };

  const loginUser = async () => {
    const res = await authenticateLogin(login);
    if (!res) {
      setError(true);
      return;
    }
    handClick();
    setAccount(login.username);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handClick}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Email/Mobile number"
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              {error && (
                <Typography className={classes.error}>
                  Invalid username or password
                </Typography>
              )}
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                variant="contained"
                onClick={() => loginUser()}
                className={classes.loginbtn}
              >
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestbtn}>
                Request OTP
              </Button>
              <Typography
                className={classes.createText}
                onClick={() => toggleuserSignup()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                name="firstname"
                onChange={(e) => onInputChange(e)}
                label="Enter Firstname"
              />
              <TextField
                name="lastname"
                onChange={(e) => onInputChange(e)}
                label="Enter Lastname"
              />
              <TextField
                name="username"
                onChange={(e) => onInputChange(e)}
                label="Enter Username"
              />
              <TextField
                name="email"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
              />
              <TextField
                name="password"
                onChange={(e) => onInputChange(e)}
                label="Enter Password"
              />
              <TextField
                name="phone"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone Number"
              />
              <Button
                variant="contained"
                onClick={() => signupUser()}
                className={classes.loginbtn}
              >
                singup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
