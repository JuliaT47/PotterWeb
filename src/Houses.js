import Gryffindor from "./images/Gryffindor.png";
import Slytherin from "./images/Slytherin.png";
import Ravenclaw from "./images/Ravenclaw.png";
import Hufflepuff from "./images/Hufflepuff.png";
import styles from "./App.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Houses = () => {
  const [activeHouse, setActiveHouse] = useState(true);

  const handleHouseClick = (house) => {
    setActiveHouse(house);
  };

  return (
    <div className={styles.cardsContainer}>
      <Link to="/">
        <button className={styles.returnBtn}>Return to Main Page</button>
      </Link>
      <h1 className={styles.h1Cards}>Characters from each house</h1>
      <div className={styles.houses}>
        <Link to="/characters">
          <button
            className={`${styles.housesBtn} ${
              activeHouse === "Gryffindor" ? styles.active : ""
            }`}
            onClick={() => handleHouseClick("Gryffindor")}
          >
            <img src={Gryffindor} alt="Gryffindor" />
            Gryffindor
          </button>
        </Link>
        <Link to="/following-soon">
          <button
            className={`${styles.housesBtn} ${
              activeHouse === "Slytherin" ? styles.active : ""
            }`}
            onClick={() => handleHouseClick("Slytherin")}
          >
            <img src={Slytherin} alt="Slytherin" />
            Slytherin
          </button>
        </Link>
        <Link to="/following-soon">
          <button
            className={`${styles.housesBtn} ${
              activeHouse === "Ravenclaw" ? styles.active : ""
            }`}
            onClick={() => handleHouseClick("Ravenclaw")}
          >
            <img src={Ravenclaw} alt="Ravenclaw" />
            Ravenclaw
          </button>
        </Link>
        <Link to="/following-soon">
          <button
            className={`${styles.housesBtn} ${
              activeHouse === "Hufflepuff" ? styles.active : ""
            }`}
            onClick={() => handleHouseClick("Hufflepuff")}
          >
            <img src={Hufflepuff} alt="Hufflepuff" />
            Hufflepuff
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Houses;
