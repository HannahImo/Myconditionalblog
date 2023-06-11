import React from "react";
import styles from './Comp.module.css';


function CompanyC({company_data}) {
  return (
    <div className={styles['company-main']}>
        {company_data?.map((data) => {
            return(
                <section className={styles['company-card']} key={data?.id}>
                    <img src={data?.img} alt={'/'} height={336} width={336}/>
                    <h3 className={styles['card-title']}> {data.title}</h3>
                    <p className={styles['card-body']}> {data.body}</p>
                </section>
            )
        }
        )}

    </div>
  )
}

export default CompanyC