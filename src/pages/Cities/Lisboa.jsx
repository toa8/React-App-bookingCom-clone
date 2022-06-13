import React from "react";
// CSS
import styles from "./City.module.css";
// COMPONENTS
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Lisboa = () => {
  return (
    <div>
      <Header type="citiesType" />
      <Navbar />
      <h2 className={styles.header}>Lisboa : 3,099 properties found</h2>
      <div className={styles.disp}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className="hotel-img">
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/39194987.webp?k=797ae9038baac981eac4d2deb95e8bc5abcf15097dc3fbd4ef9fd540425f6e4b&o=&s=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h3>Apartamentos Gran Via centro plaza callao</h3>
              <p>Centro,Madrid - 0.6 km from centre - Metro access</p>
              <p>
                Apartamentos Gran Via centro plaza callao is a self-catering
                accommodation located in Madrid with free WiFi access. The
                property is 200 metres from Callao and 200 metres from Santo
                Domingo.
              </p>
            </div>
            <div className={styles.review}>
              <p>Good</p>
              <h4>7.2</h4>
              <button className={styles.btn}>Show Prices</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className="hotel-img">
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/123914549.webp?k=2fdbb75a37d390b8defc55e2b5482ee313b6414660dc0ccc56d997eb35acb735&o=&s=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h3>Apartamentos Gran Via centro plaza callao</h3>
              <p>Centro,Madrid - 0.6 km from centre - Metro access</p>
              <p>
                Apartamentos Gran Via centro plaza callao is a self-catering
                accommodation located in Madrid with free WiFi access. The
                property is 200 metres from Callao and 200 metres from Santo
                Domingo.
              </p>
            </div>
            <div className={styles.review}>
              <p>Good</p>
              <h4>7.2</h4>
              <button className={styles.btn}>Show Prices</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className="hotel-img">
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/230052515.webp?k=9de7f7f9dd85c6b36877c0ab4f6b74e06bf21b8685df3e8d1b1764a4eb96c945&o=&s=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h3>Apartamentos Gran Via centro plaza callao</h3>
              <p>Centro,Madrid - 0.6 km from centre - Metro access</p>
              <p>
                Apartamentos Gran Via centro plaza callao is a self-catering
                accommodation located in Madrid with free WiFi access. The
                property is 200 metres from Callao and 200 metres from Santo
                Domingo.
              </p>
            </div>
            <div className={styles.review}>
              <p>Good</p>
              <h4>7.2</h4>
              <button className={styles.btn}>Show Prices</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className="hotel-img">
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/321487672.webp?k=410b152eeff9767cbba5063fca1296a43f0f6399ebb05c94b929fa7b3481d19b&o=&s=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h3>Apartamentos Gran Via centro plaza callao</h3>
              <p>Centro,Madrid - 0.6 km from centre - Metro access</p>
              <p>
                Apartamentos Gran Via centro plaza callao is a self-catering
                accommodation located in Madrid with free WiFi access. The
                property is 200 metres from Callao and 200 metres from Santo
                Domingo.
              </p>
            </div>
            <div className={styles.review}>
              <p>Good</p>
              <h4>7.2</h4>
              <button className={styles.btn}>Show Prices</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className="hotel-img">
              <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/218380872.webp?k=3104c094ac7936dc44463d62e109797f9a8d5c211e2e0faef2fede0ec43a1219&o=&s=1"
                alt=""
              />
            </div>
            <div className={styles.desc}>
              <h3>Apartamentos Gran Via centro plaza callao</h3>
              <p>Centro,Madrid - 0.6 km from centre - Metro access</p>
              <p>
                Apartamentos Gran Via centro plaza callao is a self-catering
                accommodation located in Madrid with free WiFi access. The
                property is 200 metres from Callao and 200 metres from Santo
                Domingo.
              </p>
            </div>
            <div className={styles.review}>
              <p>Good</p>
              <h4>7.2</h4>
              <button className={styles.btn}>Show Prices</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lisboa;
