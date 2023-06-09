import React from 'react'

function Coaches() {
  return (
    <div className='coaches-container'>
        <div className='sub-coaches-container'>
            <h2 className='heading'> Try Coach Connect</h2>
            <p className='body'> Meet hundreds of certified coaches who are trained to help you improve <br></br>
          your resume, create a strategy for your job search, and more</p>  
        </div>

        <div className='coach-content-wrapper'> 
            <ul className='coach-content'>
                <section className='caoch-card'>
                    <img alt='Amanda Moxham' src='/' height={'80'} width={'80'}/>
                    <h3 className='card-title'> Amanda Moxham </h3>
                    <p className='card-details'> Specialties: College/New Grads, New Managers,  Mid Career </p>
                </section>

                <section className='caoch-card'>
                    <img alt='John C. Lin' src='/' height={'80'} width={'80'}/>
                    <h3 className='card-title'> Joy C. Lin </h3>
                    <p className='card-level'> Coach </p>
                    <p className='card-details'> Specialties:  Mid Career, Executives, Women </p>
                </section>

                <section className='caoch-card'>
                    <img alt='Alex Durand' src='/' height={'80'} width={'80'}/>
                    <h3 className='card-title'> Alex Durand </h3>
                    <p className='card-level'> Master Coach </p>
                    <p className='card-details'> Specialties: New Manager, Mid Career, Executives </p>
                </section>

                <section className='caoch-card'>
                    <img alt='Alex Durand' src='/' height={'80'} width={'80'}/>
                    <h3 className='card-title'> Tamara Ellison </h3>
                    <p className='card-level'> Mentor </p>
                    <p className='card-details'> Specialties: New Manager, Mid Career, Executives </p>
                </section>

                <section className='caoch-card'>
                    <img alt='Alex Durand' src='/' height={'80'} width={'80'}/>
                    <h3 className='card-title'> Steven Davis </h3>
                    <p className='card-level'> Coach </p>
                    <p className='card-details'> Specialties: College/New Grads, Startups, Engineering/Tech  </p>
                </section>
            </ul>
        </div>
            <a href='/' className='btn-link'> Meet The Coaches </a>
    </div>
  )
}

export default Coaches