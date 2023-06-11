import React from 'react'
import PComp from './P Comp';

function Partners() {

    
    <h2 className='heading1'> Discover companies that share your values</h2>

    // <a href='/' className='company-btn'> Browse companies that share your values. </a>
     
    //     <p className='company-hiring'> Hiring? 
    //     <a href='/' alt='link'> Learn more</a> about featuring your brand on The Muse </p
    

    // Declare an array object for our array of images
// let arrayOfImages = [];

// arrayOfImages.push(['https://site.com/image-1.jpeg','Title 1','768px','1024px']);
// arrayOfImages.push(['https://site.com/image-2.jpeg','Title 2','720px','1280px']);
// arrayOfImages.push(['https://site.com/image-3.jpeg','Title 3','1080px','1920px']);

// Output arrayOfImages to the console
// console.log(arrayOfImages);
    const partner_logo = [
        {
            img: 'https://pilbox.themuse.com/?&url=https://assets.themuse.com/media/lead/homepage_tiktok_logo.png&h=51&filter=antialias&opt=1&pos=center&prog=1&q=keep',
            title: 'Tiktok',
            height: '51px',
            weight: '158px',
        },

        {
            img: '/',
            Title: 'Allbirds',
        },
        
        {
            img: '/',
            Title: 'Nike',
        },

        {
            img: '/',
            Title: 'Goldman Sachs',
        },

        {
            img: '/',
            Title: 'Rpbinhood',
        },

        {
            img: '/',
            Title: 'Audible',
        },
        
    ];

        
    // <a href='/' className={'company-btn'}> Browse companies that share your values. </a>
     
    //     <p className='company-hiring'> Hiring? 
    //     <a href='/' alt='link'> Learn more</a> about featuring your brand on The Muse </p>
    
  return (
    


        <ol>
             <ul className='company-partners'>
        <PComp comp_partners={partner_logo}/>
    </ul>
        </ol>
    
    // <a href='/' className='company-btn'> Browse companies that share your values. </a>
     
    //     <p className='company-hiring'> Hiring? 
    //     <a href='/' alt='link'> Learn more</a> about featuring your brand on The Muse </p>
    
    
    // <div className='company-partners'>
    // <div className='company-partners-h1'>
    //     <h2 className='heading1'> Discover companies that share your values</h2>    
    // </div> 

    // <div className='display-partners-logo'>
    //     <img src='' alt='Tiktok' height={'51px'} width={'158px'}/>
    //     <img src='' alt='Allbirds' height={'51px'} width={'158px'}/>
    //     <img src='' alt='Nike' height={'51px'} width={'158px'}/>
    //     <img src='' alt='Goldman Sachs' height={'51px'} width={'158px'}/>
    //     <img src='' alt='Robinhood' height={'51px'} width={'158px'}/>
    //     <img src='' alt='Audible' height={'51px'} width={'158px'}/>
    // </div>
    //     <a href='/' className='company-btn'> Browse Companies</a>
    //     <p className='company-hiring'> Hiring? 
    //     <a href='/' alt='link'> Learn more</a> about featuring your brand on The Muse </p>
    // </div>  
    

    
  
   )
}

export default Partners