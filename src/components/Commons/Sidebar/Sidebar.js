import Bars from "@/svgs/Bars";
import Logo from "@/svgs/Logo";
import React, { useState } from "react";
import { Data } from "./Data";
import Link from "next/link";

import { useRouter } from "next/router";

const Sidebar = ({ show }) => {
  const router = useRouter();

  return (
    <>
      {show ? (
        <div className="sidebar">
          <div className="side__menu">
            <ul>
              {Data?.map((data, i) => (
                <li key={i}>
                  <Link
                    href={data.url}
                    className={router.pathname == data.url ? "active" : ""}
                  >
                    <span>{data.icon}</span> {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar short__sidebar">
          <div className="side__menu">
            <ul className="short__menu">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
