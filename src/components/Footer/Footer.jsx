import React from "react";
// CSS
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <p className={styles.text}>
          Copyright ©<a href="https://github.com/toa8">toa8</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
