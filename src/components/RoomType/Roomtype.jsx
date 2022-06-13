import React from "react";
// CSS
import styles from "./RoomType.module.css";

const Roomtype = () => {
  return (
    <div className={styles.disp}>
      <h3 className={styles.header}>Browse by property type</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
          />
          <h3>Hotels</h3>
          <p>860,176 hotels</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
          />
          <h3>Apartments</h3>
          <p>814,616 apartments</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
          />
          <h3>Resorts</h3>
          <p>17,809 resorts</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
          />
          <h3>Villas</h3>
          <p>426,626 villas</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
          />
          <h3>Cabins</h3>
          <p>33,572 cabins</p>
        </div>
        <div className={styles.card}>
          <img
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
            alt=""
          />
          <h3>Cottages</h3>
          <p>143,194 cottages</p>
        </div>
      </div>
    </div>
  );
};

export default Roomtype;
