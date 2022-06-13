import React from "react";
// CSS
import styles from "./Header.module.css";
// ROUTER
import { Link } from "react-router-dom";

const Header = ({ type }) => {
  if (type === "login-stuff") {
    return (
      <div className={styles.disp}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <a href="/" className={styles.link}>
              Booking.com
            </a>
          </h3>
        </div>
      </div>
    );
  }

  if (type === "citiesType") {
    return (
      <div>
        <div className={styles.disp}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              <a href="/" className={styles.cityLink}>
                Booking.com
              </a>
            </h3>
            <div className={styles.btns}>
              <ul>
                <li>
                  <Link to="/register">
                    <button className={styles.btn}>Register</button>
                  </Link>
                </li>
                <li>
                  <Link to="/sign-in">
                    <button className={styles.btn}>Sign in</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "articles") {
    return (
      <div>
        <div className={styles.disp}>
          <div className={styles.header}>
            <h3 className={styles.title}>
              <a href="/" className={styles.cityLink}>
                Booking.com
              </a>
            </h3>
            <div className={styles.btns}>
              <ul>
                <li>
                  <Link to="/register">
                    <button className={styles.btn}>Register</button>
                  </Link>
                </li>
                <li>
                  <Link to="/sign-in">
                    <button className={styles.btn}>Sign in</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.disp}>
        <div className={styles.header}>
          <h3 className={styles.title}>Booking.com</h3>
          <div className={styles.btns}>
            <ul>
              <li>
                <Link to="/register">
                  <button className={styles.btn}>Register</button>
                </Link>
              </li>
              <li>
                <Link to="/sign-in">
                  <button className={styles.btn}>Sign in</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
