import styles from "./App.module.css";

const HoverWindow = ({ character }) => (
  <div className={styles.backdrop}>
    <div className={`${styles.modal} ${styles.show}`}>
      <p className={styles.hoverList}>
        Name: <span className={styles.hoverAnswers}>{character.name}</span>
      </p>
      <p className={styles.hoverList}>
        Alternate names:{" "}
        <span className={styles.hoverAnswers}>
          {character.alternate_names.join(", ")}
        </span>
      </p>
      <p className={styles.hoverList}>
        Species:{" "}
        <span className={styles.hoverAnswers}>{character.species}</span>
      </p>
      <p className={styles.hoverList}>
        Gender: <span className={styles.hoverAnswers}>{character.gender}</span>
      </p>
      <p className={styles.hoverList}>
        House: <span className={styles.hoverAnswers}>{character.house}</span>
      </p>
      <p className={styles.hoverList}>
        Date of Birth:{" "}
        <span className={styles.hoverAnswers}>{character.dateOfBirth}</span>
      </p>
      <p className={styles.hoverList}>
        Year of birth:{" "}
        <span className={styles.hoverAnswers}>{character.yearOfBirth}</span>
      </p>
      <p className={styles.hoverList}>
        Wizard: <span className={styles.hoverAnswers}>{character.wizard}</span>
      </p>
      <p className={styles.hoverList}>
        Ancestry:{" "}
        <span className={styles.hoverAnswers}>{character.ancestry}</span>
      </p>
      <p className={styles.hoverList}>
        Eye Color:{" "}
        <span className={styles.hoverAnswers}>{character.eyeColour}</span>
      </p>
      <p className={styles.hoverList}>
        Hair Color:{" "}
        <span className={styles.hoverAnswers}>{character.hairColour}</span>
      </p>
      <p className={styles.hoverList}>
        Wand:{" "}
        {character.wand?.wood &&
          character.wand?.core &&
          character.wand?.length && (
            <span className={styles.hoverAnswers}>
              {`Wood: ${character.wand.wood}, Core: ${character.wand.core}, Length: ${character.wand.length}`}
            </span>
          )}
      </p>
      <p className={styles.hoverList}>
        Patronus:{" "}
        <span className={styles.hoverAnswers}>{character.patronus}</span>
      </p>
      <p className={styles.hoverList}>
        Hogwarts Student:
        <span className={styles.hoverAnswers}>
          {character.hogwartsStudent ? " Yes" : " No"}
        </span>
      </p>
      <p className={styles.hoverList}>
        Hogwarts Staff:
        <span className={styles.hoverAnswers}>
          {character.hogwartsStaff ? " Yes" : " No"}
        </span>
      </p>
      <p className={styles.hoverList}>
        Actor: <span className={styles.hoverAnswers}>{character.actor}</span>
      </p>
      <p className={styles.hoverList}>
        Alive:
        <span className={styles.hoverAnswers}>
          {character.alive ? " Yes" : " No"}
        </span>
      </p>
    </div>
  </div>
);

export default HoverWindow;
