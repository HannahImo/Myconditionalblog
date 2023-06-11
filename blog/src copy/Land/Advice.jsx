import React from 'react'

function Advice() {
  return (
    <div className='advice-container'>
    <div className='advice-space'>
        <h2 className='heading-text'> Forge a career that exceeds your ambitions. </h2>
        <p className='header-p'> Get expert advice for every life stage and experience level. </p>    
    
    
    <div className='advice-wrapper'>
      <section className='article-card'>
        <a className='card-wrapper' href='/'> 
      <section className='article-card-wrapper'>
        <img src='/' alt='/' height={'250'} width={'344'}/> 
        <h3 className='card-title'> Succeeding at Work </h3>
      </section>
         </a>      
      </section>

      <section className='article-card'>
        <a className='card-wrapper' href='/'>
          <section className='article-card-wrapper'> 
          <img className='card-image' alt='career paths' height={'250'} loading='lazy' src='' width='344'/>
          </section>
            <h3 className='card-title'> Career Paths </h3>
        </a>
      </section>

      <section className='article-card'>
        <a className='card-wrapper' href='/'>
          <section className='article-card-wrapper'> 
          <img className='card-image' alt='Job search' height={'250'} loading='lazy' src='' width='344'/>
          </section>
            <h3 className='card-title'> Job search </h3>
        </a>
      </section>
    </div>

    <a href='/' className='square-btn'> Read More  </a>
    
    

    </div>
    </div>

    
    
  )
}

export default Advice