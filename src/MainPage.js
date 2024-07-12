import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.header}>WELCOME TO THE HARRY POTTER WORLD</h1>
        <button
          className={styles.showCharactersBtn}
          onClick={handleToggleVisibility}
        >
          Show all characters
        </button>
        {isVisible && (
          <div className={styles.charactersPopUp}>
            <div className={styles.students}></div>
            <div className={styles.tutors}></div>
            <div className={styles.characters}></div>
          </div>
        )}
        {isVisible && (
          <div className={styles.buttons}>
            <Link to="/students">
              <button className={styles.popUpBtn}>Hogwarts' students</button>
            </Link>

            <Link to="/staff">
              <button className={styles.popUpBtn}>Hogwarts' staff</button>
            </Link>

            <Link to="/characters">
              <button className={styles.popUpBtn}>
                Characters from each house
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
