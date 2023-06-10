import React from 'react'
// import styles from '.Recent.module.css';
import Rcomponent from './Rcomponent';

function Recent() {

    const recent_articles = [
                {
                    id: 1,
                    img: '/',
                    author: 'Rainesford Stauffer',
                    title: 'What It Feels Like When Overwork Is Your Baseline',
                },

                {
                    id: 2,
                    img: '/',
                    author: 'Aliza Licht',
                    title: 'Is Your Personal Brand What You Think It Is? Find Out With These Exercises',
                },

                {
                    id: 3,
                    img: '/',
                    author: 'The Muse Editors',
                    title: 'This Pharma Expert Is Inspiring the Next Generation of BIPOC Scientists',
                },

                {
                    id: 4,
                    img: '/',
                    author: 'Benish Shah',
                    title: 'Is It Toxic? My Boss Made Me Work Through a Mass Shooting',
                },

                {
                    id: 5,
                    img: '/',
                    author: 'Alyse Kalish',
                    title: 'What Self-Awareness Is, and 8 Ways to Improve It',
                },

                {
                    id: 6,
                    img: '/',
                    author: 'Alyse Kalish',
                    title: 'What Critical Thinking Is—And 7 Ways to Improve Yours',
                },

                 
    ];

  return (

        <ul className='article-authors'>
        <Rcomponent our_articles={recent_articles}/>
    </ul>

      
  )
}

export default Recent