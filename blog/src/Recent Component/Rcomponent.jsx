import React from 'react'
import styles from './Recent.module.css';


function Rcomponent({our_articles}) {
    console.log(our_articles);
  return (
    <div className={styles['recente-article']}>
        {our_articles?.map((recent_articles) => {

            return (
                <section className={styles['coach-card']} key={recent_articles?.id}>
                    <img src={recent_articles?.img} height={80} width={80}/>
                    <h3 className={styles['card-author']}> {recent_articles.author} </h3>
                    <p className={styles['card-title']}>{recent_articles.title}</p>
                </section>
            )
        } )
        
    }
    </div>
  )
}

export default Rcomponent