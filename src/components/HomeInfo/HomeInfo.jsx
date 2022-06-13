import React, { useState } from "react";
// CSS
import styles from "./HomeInfo.module.css";
// ROUTE
import { Link } from "react-router-dom";
// Action
import { holdInfo } from "../../reducers/SeachInfo";
// Redux
import { useDispatch } from "react-redux";

const HomeInfo = () => {
  const [cityInput, setCityInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.disp}>
      <div className={styles.context}>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <Link to="/sign-in">
          <button className={styles.btn}>Sign in / Register</button>
        </Link>
      </div>
      <div className={styles.searchDisplay}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Where are you going ?"
            minLength={3}
            maxLength={15}
            onChange={(e) => setCityInput(e.currentTarget.value)}
          />

          <Link to="/search-results">
            <button
              onClick={() => dispatch(holdInfo(cityInput))}
              className={styles.searchBtn}
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomeInfo;
