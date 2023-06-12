import React from 'react';
import CompanyC from './Company C';
import styles from './Comp.module.css';

function Compinfo() {

  const Company_info = [

    {
      id: 1,
      img: 'https://tinyurl.com/4b647k7e',
      title: 'What we offer job seekers',
      body: ' We unlock professional advice for people exploring their options, job searches tailored to personal priorities, company profiles that go behind the scenes at an org, and more.',
    },

    {
      id: 2,
      img: 'https://tinyurl.com/nhzsduvz',
      title: 'What we offer Employers',
      body: 'We help companies build a more robust, informed candidate pipeline and strengthen their employer brand through authentic storytelling content and targeted job postings.',
    },

    {
      id: 3,
      img: 'https://tinyurl.com/zucp3xa9',
      title: 'How We do it better',
      body: 'We combine the speed and scale of technology with a deep understanding of people to clarify your career search and connect you with companies that fit your life and goals.',
    },

  ];

  return (
     
     <div>
        <h2 className='company-info-heading'> A smarter 
        way to search for jobs </h2>
        

       
        <div className={styles['comp-li']}>
          <CompanyC companydata={Company_info}/>
         
        <a href='/' className='readmore-btn'> Read More </a>
         </div>
         
         </div>
  )
}

export default Compinfo