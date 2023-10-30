import React, { useState } from "react";
import Menubar from "../Commons/Menubar/Menubar";
import Sidebar from "../Commons/Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Menubar show={show} setShow={setShow}/>
      <Sidebar show={show}/>
      <main className="main__section">{children}</main>
    </>
  );
};

export default Layout;
