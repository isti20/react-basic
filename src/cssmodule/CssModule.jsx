import React from "react";
import Styles from "../css/cssmodule.module.css";

const CssModule = () => {
  const styles = `${Styles.module} ${Styles.bold}`

  return (
    <div>
      <p className={styles}>Styling</p>
    </div>
  );
};

export default CssModule;