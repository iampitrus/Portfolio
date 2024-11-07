import React from "react";
import Menu from "./Navbar/Menu";

function Layout({ children }) {
  return (
    <main>
      <Menu />
      {children}
    </main>
  );
}

export default Layout;
