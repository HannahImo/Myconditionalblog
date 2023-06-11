import React from 'react'

function Recent() {
  return (
     <div>
        <aside className='recent-articles'>
            <h2 className='recent-article-heading'> Check out recent articles. </h2>
            <p className='sub-heading'> Get all the information and support you
                need to find work that's worth it. </p>
            
            <article className='article1'> 
                <a className='article-wrapper' href='/'>
                 <img className='article-image' height={'111'} width={'111'} alt=''/>
                    <div className='article-content'> 
                        <p className='article-author'> Rainesford Stauffer </p>
                            <h3 className='article-title'> What It Feels Like When Overwork Is Your Baseline </h3>
                    </div>
                </a> 
            </article> 


            <article className='article2'> 
                <a className='article-wrapper' href='/'>
                 <img className='article-image' height={'111'} width={'111'} alt=''/>
                    <div className='article-content'> 
                        <p className='article-author'> Aliza Licht </p>
                            <h3 className='article-title'> Is Your Personal Brand What You Think It Is? Find Out With These Exercises </h3>
                    </div>
                </a> 
            </article> 

            <article className='article3'> 
                <a className='article-wrapper' href='/'>
                 <img className='article-image' height={'111'} width={'111'} alt=''/>
                    <div className='article-content'> 
                        <p className='article-author'> Benish Shah </p>
                            <h3 className='article-title'> Is It Toxic? My Boss Made Me Work Through a Mass Shooting </h3>
                    </div>
                </a> 
            </article>        
        </aside>
     </div>
  )
}

export default Recent