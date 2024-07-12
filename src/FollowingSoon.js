import Houses from "./Houses";
import styles from "./App.module.css";

const FollowingSoon = () => {
  return (
    <>
      <Houses />
      <h1 className={styles.following}>Following Soon</h1>
    </>
  );
};

export default FollowingSoon;
