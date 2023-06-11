import React from "react";
import styles from "./Partner.module.css";

function PComp({ partner_logo }) {
  console.log(partner_logo);

  return (
    <div className={styles["partnered-with"]}>
      {partner_logo?.map((item) => {
        return (
          <section className={styles["logo-covering"]} key={item?.id}>
            <img src={item?.img} />
          </section>
        );
      })}
    </div>
  );
}

export default PComp;
