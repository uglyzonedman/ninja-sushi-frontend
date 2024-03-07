import React from "react";
import ReactDOM from "react-dom";
import styles from "./Overlay.module.scss";
const Overlay = () => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}></div>,
    typeof window !== "undefined" ? document.body : window
  );
};

export default Overlay;
