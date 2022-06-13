import React from "react";
// CSS
import styles from "./Cities.module.css";
// ROUTER
import { Link } from "react-router-dom";

const Cities = () => {
  return (
    <div className={styles.disp}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Link to="/cities/lisboa">
            <img
              className={styles.img}
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/619964.webp?k=7e2df42a96dbbc8ccb8fa9446e4b63cf7bebe4123a41e387314ce3538eea0df7&o="
              alt="Lisboa.jpeg"
            />
            <div className={styles.desc}>
              <h3>Lisboa</h3>
              <p>7,620 properties</p>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="/cities/london">
            <img
              className={styles.img}
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="
              alt="London.jpeg"
            />
            <div className={styles.desc}>
              <h3>London</h3>
              <p>14,501 properties</p>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="/cities/madrid">
            <img
              className={styles.img}
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/971352.webp?k=e60b6789bf1ef865daa29402a8b8c69dd495df90fd4859e0b9f8525592476116&o="
              alt="Madrid.jpeg"
            />
            <div className={styles.desc}>
              <h3>Madrid</h3>
              <p>5,759 properties</p>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="/cities/rome">
            <img
              className={styles.img}
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/613104.webp?k=6e9fa0c6cb25472c6a843ddc1a14d93cf7a7306a4111a74052af94d75c69b03e&o="
              alt="Rome.jpeg"
            />
            <div className={styles.desc}>
              <h3>Rome</h3>
              <p>14,103 properties</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cities;
