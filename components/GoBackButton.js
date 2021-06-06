import React from "react";
import Link from "next/link";
import styles from "../styles/GoBackButton.module.scss";

const GoBackButton = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.goHome}>Go Home</a>
      </Link>
    </div>
  );
};

export default GoBackButton;
