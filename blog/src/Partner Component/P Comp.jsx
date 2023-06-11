import React from "react";
import styles from "./Partner.module.css";

function PComp({ comp_partners }) {
  
  return (
    <div className={styles["partnered-with"]}>
      {comp_partners?.map((item) => {
        return (
          <section className={styles["logo-covering"]} key={item?.id}>
            <img src={item?.img} alt={'/'} />
          </section>
        );
      })}
    </div>
  );
}

export default PComp;
