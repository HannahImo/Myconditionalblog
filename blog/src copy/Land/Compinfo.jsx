import React from 'react'

function Compinfo() {
  return (
    <div className='company-info'>
    <div className='company-container-animate'>
    <div className='company-info-header'>
        <h2 className='comapny-info-heading'> A smarter 
        way to search for jobs </h2>
        </div>
        </div>

        <div className='pic 1-info'>
        <img className='img1' src='' alt=''/>
        <h3 className='main-text'> What we offer job seekers </h3>  
        <p> We unlock professional advice for people exploring their options, job <br></br>
        searches tailored to personal priorities, company profiles that go <br></br>
        behind the scenes at an org, and more.</p>
    </div>

    <div className='pic 2-info'>
        <img className='img2' src='' alt='' width={'336'} height={'336'}/> 
        <div className='overflow-container'> 
        <h3 className='main-text2'> What we offer employers </h3>
        <p> We help companies build a more robust, informed candidate pipeline and <br>
        </br>strengthen their employer brand through authentic storytelling content <br>
        </br> and targeted job postings.</p> 
    </div>
        

    <div className='pic 3-info'> 
        <img className='img3' src='' alt='' width={'336'} height={'336'}/>
        <div className='overflow-container2'>
            <h3 className='main-text3'> How we do it better</h3>
            <p className='sub-text'> We combine the speed and scale of technology with a deep understanding <br></br> 
            of people to clarify your career search and connect you with companies <br></br>
            that fit your life and goals.</p>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Compinfo