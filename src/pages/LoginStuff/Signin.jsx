import React from "react";
// COMPONENTS
import Header from "../../components/Header/Header";
// CSS
import styles from "./loginstuff.module.css";

const Signin = () => {
  return (
    <div>
      <Header type="login-stuff" />
      <form className={styles.form}>
        <h3 className={styles.header}>Sign in or create an account</h3>
        <p>Email Address</p>
        <input type="email" className={styles.input} required />
        <button className={styles.btn}>Continue with email</button>
      </form>
    </div>
  );
};

export default Signin;
