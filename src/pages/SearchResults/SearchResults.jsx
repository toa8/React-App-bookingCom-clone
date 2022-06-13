import React from "react";
// CSS
import styles from "./searchresults.module.css";
// Redux
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const SearchResults = () => {
  const input = useSelector((state) => state.searchReducer);

  if (input[0] === "") {
    return (
      <>
        <div className={styles.notFoundContainer}>
          <p className={styles.notFound}>Invalid Input!</p>

          <a href="/" className={styles.btn}>
            Go back
          </a>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header type="citiesType" />
      <div className="container">
        <p className={styles.title}>Searched Place : {input}</p>
        <div className={styles.cards}>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(https://t-cf.bstatic.com/static/img/communities/cover-photo/300x300/portugal/21e7947c14dfef96198d7edde59340ad455f76f4.jpg)`,
            }}
          >
            <p className={styles.header}>Hotels in {input}</p>
          </div>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(https://t-cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png)`,
            }}
          >
            <p className={styles.header}>Planes to {input}</p>
          </div>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(https://t-cf.bstatic.com/static/img/communities/mode-of-transport/car.jpg)`,
            }}
          >
            <p className={styles.header}>Rent a Car in {input}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
