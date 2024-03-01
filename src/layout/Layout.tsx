import React from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
