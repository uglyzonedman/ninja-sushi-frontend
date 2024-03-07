"use client";
import React from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./footer/Footer";
import styles from "./Layout.module.scss";
import { AuthState, authZustand } from "../store/auth.zustand";
import AuthModal from "../components/ui/auth-modal/AuthModal";
import Cookies from "js-cookie";
interface ILayout {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Layout = ({ children }: ILayout) => {
  const { isOpen, setIsOpen } = authZustand((state: AuthState) => state);
  let user = Cookies.get("user");

  return (
    <div className={styles.wrapper}>
      <QueryClientProvider client={queryClient}>
        <div id="modal-root"></div>
        {isOpen ? <div className={styles.overlay}></div> : ""}
        {isOpen ? <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
        <Header />
        <Navigation />
        <main className={styles.main}>{children}</main>
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
