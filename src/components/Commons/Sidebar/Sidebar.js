import Bars from "@/svgs/Bars";
import Logo from "@/svgs/Logo";
import React, { useState } from "react";
import { Data } from "./Data";
import Link from "next/link";

import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Home from "@/svgs/Home";

const Sidebar = ({ show }) => {
  const router = useRouter();

  return (
    <>
      {show ? (
        <div className="sidebar">
          <div className="side__menu">
            <ul className="side__menu__first">
              {Data?.map((data, i) => (
                <li key={i}>
                  <Button>
                    <Link
                      href={data.url}
                      className={router.pathname == data.url ? "active" : ""}
                    >
                     {data.icon} <span>{data.name}</span> 
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>

            <ul className="side__menu__last">
              <li>
                <Button>
                  <Link href="">
                    <Home />
                    <span>Settings</span>
                  </Link>
                </Button>
              </li>

              <li>
                <Button>
                  <Link href="">
                    <Home />
                    <span>Feedback</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar short__sidebar">
          <div className="side__menu">
            <ul className="short__menu side__menu__first">
              {Data?.map((data, i) => (
                <li key={i}>
                  <Link
                    href={data.url}
                    className={router.pathname == data.url ? "active" : ""}
                  >
                    {data.icon} <span>{data.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="short__menu side__menu__last">
              <li>
                <Button>
                  <Link href="">
                    <Home />
                    <span>Settings</span>
                  </Link>
                </Button>
              </li>

              <li>
                <Button>
                  <Link href="">
                    <Home />
                    <span>Feedback</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
