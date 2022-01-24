import { Box, makeStyles, Typography } from "@material-ui/core";
import { navData } from "../../constant/data";

const useStyle = makeStyles({
  component: {
    display: "flex",
    justifyContent: "space-between",
    margin: "55px 130px 0 130px",
    overflowX: "overlay",
  },
  componentr: {
    padding: "12px 8px",
    textAlign: "center",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((temp) => (
        <Box className={classes.componentr}>
          <img src={temp.url} className={classes.image} alt="" />
          <Typography className={classes.text}>{temp.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
