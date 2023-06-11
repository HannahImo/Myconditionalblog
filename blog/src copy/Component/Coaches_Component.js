import React from "react";
import styles from "./Coaches.module.css";

function Coaches_Component({ ourdata }) {
  console.log(ourdata);
  return (
    <div className={styles["coach-main"]}>
      {ourdata?.map((data) => {
        return (
          <section className={styles["coach-card"]} key={data?.id}>
            <img src={data?.img} height={80} width={80} />
            <h3 className={styles["card-title"]}>{data.title} fdkfdfk</h3>
            <p className={styles["card-details"]}>{data.body}</p>
          </section>
        );
      })}
    </div>
  );
}

export default Coaches_Component;
