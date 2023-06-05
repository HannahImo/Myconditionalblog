 
import React from 'react'

function Row2() {
  return (
    <div className="header-left-container">
        <h1 className="header-h1">
               Find work <br></br>
               that's <span>worth it.</span>  </h1>        
                <p className=" header-subtext"> Make a career match where the people, perks and value <br></br>align with your needs.</p>
        

                <form action="#"> 
                <input type="text" placeholder=" Search Courses" className="search"/>
                <button>
                <i class="fa fa-search" style={{fontsize: "18px"}}> </i>
                </button>
                </form>
                
                <div className='header-right'>
                <img className='header-right-img' src="https://img.freepik.com/free-photo/satisfied-carefree-female-model-smiles-gently-touches-chin-looks-aside-notices-funny-scene-laughs-something-has-natural-curly-dark-hair-dressed-casually-isolated-pink-wall_273609-27918.jpg?w=826&t=st=1685914398~exp=1685914998~hmac=24ca05d8585b138f80a41df2b39bff0238d60e0f68ab4ddd417ebcbc99914df3" alt=""></img>
                </div>
                </div> 
  )
}

export default Row2;  