import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { PowerSettingsNew } from "@material-ui/icons";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    marginLeft: 20,
  },
});

const Profile = ({ account, setAccount }) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <React.Fragment>
      <Typography onClick={handleClick} style={{ marginTop: 4, cursor:'pointer' }}>
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Profile;
