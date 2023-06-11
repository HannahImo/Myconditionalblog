import React from 'react';
import styles from './Partner.module.css';

function PComp({partner_logo}) {
        console.log(partner_logo);


    // Declare an array object for our array of images
// let arrayOfImages = [];

// arrayOfImages.push(['https://site.com/image-1.jpeg','Title 1','768px','1024px']);
// arrayOfImages.push(['https://site.com/image-2.jpeg','Title 2','720px','1280px']);
// arrayOfImages.push(['https://site.com/image-3.jpeg','Title 3','1080px','1920px']);

// Output arrayOfImages to the console
// console.log(arrayOfImages);
    

  return (
    <div className={styles['partnered-with']}> 
        {comp_partners?.map((partner_logo) => {

            return (
                <section className={styles['logo-covering']} key={partner_logo?.img}   >
                    <img src={partner_logo?.img} />
                </section>   
            )
        }
        )
        }
    </div>
  )
}

export default PComp
//   return (
//     <div className={styles['recente-article']}>
//         {our_articles?.map((recent_articles) => {

//             return (
//                 <section className={styles['coach-card']} key={recent_articles?.id}>
//                     <img src={recent_articles?.img} height={80} width={80}/>
//                     <h3 className={styles['card-author']}> {recent_articles.author} </h3>
//                     <p className={styles['card-title']}>{recent_articles.title}</p>
//                 </section>
//             )
//         } )