import DBImage from "@/components/ReUse/DBImage";
import DBInput from "@/components/ReUse/DBInput";
import Bars from "@/svgs/Bars";
import Logo from "@/svgs/Logo";
import NotificationIcon from "@/svgs/NotificationIcon";
import SearchIcon from "@/svgs/SearchIcon";
import { Container, Grid } from "@mui/material";
import React from "react";

const Menubar = ({show,setShow}) => {
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="menubar">
        <Container>
          <Grid container spacing={2}>
            {/* left */}
            <Grid item lg={3} xs={3}>
              <div className="menubar__left">
                <div onClick={handleClick} className="bars">
                  <Bars />
                </div>
                <div className="logo">
                  <Logo />
                </div>
              </div>
            </Grid>

            {/* middle */}
            <Grid item lg={6} xs={6}>
              <div className="menubar__middle">
                <DBInput name="" placeholder="Search" />
                <div className="search__bar">
                  <SearchIcon />
                </div>
              </div>
            </Grid>

            {/* right */}
            <Grid item lg={3} xs={3}>
              <div className="menubar__right">
                <div className="notification">
                  <span>10</span>
                  <NotificationIcon />
                </div>
                <div className="user">
                  <DBImage
                    image="/images/user.jpg"
                    width="35"
                    height="35"
                    alt="user"
                  />
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
