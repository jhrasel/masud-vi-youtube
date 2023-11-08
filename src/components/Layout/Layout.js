import React, { useState } from "react";
import Menubar from "../Commons/Menubar/Menubar";
import Sidebar from "../Commons/Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Menubar show={show} setShow={setShow} />
      <div className="gap__layout">
        <Sidebar show={show} />
        {show ? (
          <main className="main__section" show={show}>
            {children}
          </main>
        ) : (
          <main className="main__section main__section__long" show={show}>
            {children}
          </main>
        )}
      </div>
    </>
  );
};

export default Layout;
