import React from "react";

import styles from "./Bar.module.css";

const Bar = ({ overrideStyles, children }) => {
  return (
    <div
      className={styles.bar}
      style={{ backgroundColor: "hsl(195deg, 20%, 86%)", ...overrideStyles }}
    >
      {children}
    </div>
  );
};

export default Bar;
