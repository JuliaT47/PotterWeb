import styles from "./App.module.css";
import charactersData from "./Characters.json";
import { useRef, useState } from "react";
import HoverWindow from "./Hover";
import Houses from "./Houses";

const CharactersPage = () => {
  const [hoverCharacter, setHoverCharacter] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeout = useRef(null);

  const handleHover = (character) => {
    clearTimeout(hoverTimeout.current);
    setIsHovering(true);
    setHoverCharacter(character);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovering(false);
      setHoverCharacter(null);
    }, 1500);
  };

  return (
    <>
      <Houses />
      <div className={styles.cardsDiv1}>
        <div className={`${styles.potter} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(charactersData.find((c) => c.name === "Harry Potter"))
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Harry Potter</h3>
            <p>
              The Boy Who Lived
              <br /> Gryffindor
              <br />
              31-07-1980
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.granger} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(
                charactersData.find((c) => c.name === "Hermione Granger")
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Hermione Granger</h3>
            <p>
              Know-it-all <br /> Gryffindor <br />
              19-09-1979
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.weasley} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(charactersData.find((c) => c.name === "Ron Weasley"))
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Ron Weasley</h3>{" "}
            <p>
              Dragomir Despard <br />
              Gryffindor <br />
              01-03-1980
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.mcGonagall} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(
                charactersData.find((c) => c.name === "Minerva McGonagall")
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Minerva McGonagall</h3>
            <p>
              Professor
              <br /> Gryffindor
              <br />
              4-10-1925
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardsDiv2}>
        <div className={`${styles.hagrid} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(
                charactersData.find((c) => c.name === "Rubeus Hagrid")
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Rubeus Hagrid</h3>
            <p>
              Dragomir Despard
              <br /> Gryffindor
              <br />
              06-12-1928
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.longbottom} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(
                charactersData.find((c) => c.name === "Neville Longbottom")
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Neville Longbottom</h3>
            <p>
              Head of Gryffindor House <br />
              Gryffindor <br />
              30-07-1980
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.weasleyGinny} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(
                charactersData.find((c) => c.name === "Ginny Weasley")
              )
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Ginny Weasley</h3>{" "}
            <p>
              Seeker <br />
              Gryffindor <br />
              11-08-1981
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
        <div className={`${styles.black} ${styles.card}`}>
          <div
            onMouseEnter={() =>
              handleHover(charactersData.find((c) => c.name === "Sirius Black"))
            }
            onMouseLeave={handleMouseLeave}
          >
            <h3>Sirius Black</h3>{" "}
            <p>
              Padfoot, Snuffles <br />
              Gryffindor <br />
              03-11-1959
            </p>
            <p className={styles.moreInfo}>
              More information{" "}
              <button className={styles.svgBtn}>
                <div className={styles.svgContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 55 32"
                    width="28"
                    height="16"
                    className={styles.arrowSvg}
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.429"
                      d="M36.571 0c0 1.691 1.669 4.229 3.36 6.354 2.171 2.743 4.777 5.12 7.771 6.949 2.24 1.371 4.96 2.697 7.154 2.697m.001 0c-2.194 0-4.914 1.303-7.154 2.674-2.994 1.829-5.6 4.229-7.771 6.949-1.691 2.149-3.36 4.686-3.36 6.377m18.285-16H0"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="16"
                    height="16"
                    className={styles.circleSvg}
                  >
                    <path
                      fill="#f9b50c"
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                    />
                  </svg>
                </div>
              </button>
            </p>
          </div>
        </div>
      </div>
      {isHovering && hoverCharacter && (
        <HoverWindow character={hoverCharacter} onClose={handleMouseLeave} />
      )}
    </>
  );
};

export default CharactersPage;
