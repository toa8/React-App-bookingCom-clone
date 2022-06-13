import React from "react";
// CSS
import styles from "./Navbar.module.css";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.disp}>
      <div className={styles.items}>
        <div className={styles.item}>
          <button className={styles.btn}>
            <p>
              <FontAwesomeIcon icon={faBed} id="icon" /> Stays
            </p>
          </button>
        </div>
        <div className={styles.item}>
          <button className={`${styles.btn} ${styles.other}`}>
            <p>
              <FontAwesomeIcon icon={faPlane} id="icon" /> Fligths
            </p>
          </button>
        </div>
        <div className={styles.item}>
          <button className={`${styles.btn} ${styles.other}`}>
            <p>
              <FontAwesomeIcon icon={faCar} id="icon" /> Car Rental
            </p>
          </button>
        </div>
        <div className={styles.item}>
          <button className={`${styles.btn} ${styles.other}`}>
            <p>
              <FontAwesomeIcon icon={faTaxi} id="icon" /> Airport Taxis
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
