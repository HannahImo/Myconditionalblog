import React from "react";
import styles from './Comp.module.css';


function CompanyC({companydata}) {
  return (
    <div className={styles['company-main']}>
        {companydata?.map((item) => {
            return(
                <section className={styles['company-card']} key={item?.id}>
                    <img className={['company-img']}src={item?.img} alt={'/'} height={200} width={200}/>
                    <h3 className={styles['card-title']}> {item.title}</h3>
                    <p className={styles['card-body']}> {item.body}</p>
                </section>
            )
        }
        )}

    </div>
  )
}

export default CompanyC