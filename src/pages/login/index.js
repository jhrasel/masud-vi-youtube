
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import DBLink from "@/components/ReUse/DBLink";
import Link from "next/link";
import { useState } from "react";
import { DBInput } from "@/components/ReUse/DBInput";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [showPass, setShowPass] = useState(false);

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <section className="login">
        <div className="login__box">
          <div className="heading">
            <h2>Sign in to account</h2>
            <p>Enter your email & password to login</p>
          </div>
          <div className="login__form">
            {/* email */}
            <DBInput label="Email Address" />

            {/* password */}
            <div className="login__pass">
              <DBInput label="Password" type={showPass ? "text" : "password"} />

              {showPass ? (
                <div className="eye" onClick={handleShow}>
                  <VisibilityOffIcon />
                </div>
              ) : (
                <div className="eye" onClick={handleShow}>
                  <VisibilityIcon />
                </div>
              )}
            </div>

            {/* remember__pass */}
            <div className="remember__pass">
              <FormControlLabel
                control={<Checkbox />}
                label="Remember password"
              />
              <DBLink url="" name="Forgot password?" />
            </div>

            <Button>Sign In</Button>

            <div className="Sign__in__with">
              <h6>
                <span>Or Sign in with</span>
                <div className="bdr"></div>
              </h6>
              <div className="social__icon">
                <Link href="">
                  <LinkedInIcon />
                </Link>
                <Link href="">
                  <TwitterIcon />
                </Link>
                <Link href="">
                  <FacebookIcon />
                </Link>
                <Link href="">
                  <InstagramIcon />
                </Link>
              </div>
              <div className="dont__acc">
                <p>
                  Dont have account? <Link href="">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
