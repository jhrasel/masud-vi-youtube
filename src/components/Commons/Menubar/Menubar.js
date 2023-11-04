import DBImage from "@/components/ReUse/DBImage";
import DBInput from "@/components/ReUse/DBInput";
import Bars from "@/svgs/Bars";
import Logo from "@/svgs/Logo";
import NotificationIcon from "@/svgs/NotificationIcon";
import SearchIcon from "@/svgs/SearchIcon";
import { Button, Container, Grid, Menu, MenuItem } from "@mui/material";
import React from "react";

const Menubar = ({ show, setShow }) => {
  const handleClick = () => {
    setShow(!show);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="menubar">
        <Container>
          <Grid container spacing={2} className="d_flex">
            {/* left */}
            <Grid item lg={6} xs={6}>
              <div className="menubar__left">
                <div onClick={handleClick} className="bars">
                  <Bars />
                </div>
                <div className="logo">
                  <Logo />
                </div>
              </div>
            </Grid>

            {/* right */}
            <Grid item lg={6} xs={6}>
              <div className="menubar__right">
                <div className="notification">
                  <span>10</span>
                  <NotificationIcon />
                </div>
                <div className="user">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickMenu}
                  >
                    <DBImage
                      image="/images/user.jpg"
                      width="35"
                      height="35"
                      alt="user"
                    />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    className="profile__dropdown"
                  >
                    <div>
                      <div className="profile__flex" onClick={handleClose}>
                        <div className="img">
                          <img src="/images/user.jpg" alt="" />
                        </div>
                        <div className="text">
                          <h4>Jafrul Hasan Rasel</h4>
                          <p>abc@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </nav>
    </>
  );
};

export default Menubar;
