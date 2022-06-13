import React from "react";
// CSS
import styles from "./CountryInfo.module.css";
// ROUTE
import { Link } from "react-router-dom";

const Countryinfo = () => {
  return (
    <div className={styles.disp}>
      <h1 className={styles.header}>Get inspiration for your next trip</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Link to="/article/1">
            <div
              className={styles.img}
              style={{
                backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/540x405/156093184.webp?k=9fb3e790b48b90a70fb260b21350c573f6317358ef69947222a2628c6b2056db&o=")`,
              }}
            ></div>
            <div className={styles.desc}>
              <h3>5 of the top global LGBTQ+ destinations</h3>
              <p>The best places for LGBTQ+ travellers around the world</p>
            </div>
          </Link>
        </div>

        <div className={styles.card}>
          <Link to="/article/2">
            <div
              className={styles.img}
              style={{
                backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/720x405/155421743.webp?k=c1d8bddf8369d5f0f151963c3b0cdc9f7d863d800f39357613ae96c6c888382d&o=")`,
              }}
            ></div>
            <div className={styles.desc}>
              <h3>5 city trips for cyclists</h3>
              <p>The best cities around the world to discover on two wheels.</p>
            </div>
          </Link>
        </div>

        <div className={styles.card}>
          <Link to="/article/3">
            <div
              className={styles.img}
              style={{
                backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/540x405/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=")`,
              }}
            ></div>
            <div className={styles.desc}>
              <h3>6 luxurious long stays in Europe</h3>
              <p>
                Live a local life of luxury residing in any of these beautiful
                European long stays.
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.card2}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/720x405/152633419.webp?k=f3bde4d0501f7ecbecfc8a2f545a4ed47b0ca0ed35f0c3b8c55a39fd3dca8154&o=")`,
            }}
          ></div>
          <div className={styles.desc}>
            <h3>5 cities to celebrate King’s Day in the Netherland</h3>
            <p>
              Yearly, millions of people take to the streets of the Netherlands
              to celebrate King’s Day.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/540x405/152666494.webp?k=a523440672208e1d89e5de7d6425728d56724d89bd9cddc90e52a00cae6e228f&o=")`,
            }}
          ></div>
          <div className={styles.desc}>
            <h3>The most scenic road trips in Northern Italy</h3>
            <p>
              Exploring rolling Tuscan hills, the shores of the Italian Lakes,
              and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countryinfo;
