 
//  function Card = ({social_Data})
 function Card ({social_Data}) {
  return (
    <>
      <div className="container1">
      <div class="d-flex justify-content-center"><div class="card">  
        <div className="cardsmple" class="card bg-light mb-3" style= {{maxwidth: '18rem'}}>
          <div class="card-body">
        <h3 class="card-title">Starter pack</h3>
        <h4 class="card-subtitle mb-2 text-body-secondary">$0</h4>
        <h5 class="card-title">Features</h5>
        <ul className="card-list" >
         <li> <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>Free hosting </li>
         <li> <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>Free web domain </li>
         <li> <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>Free web security</li>
         <li> <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/checked--v1.png" alt="checked--v1"/>Free database for 1 month </li>
        </ul>
        {social_Data === "Card" ? (
        <button>
          <a href="/" class="card-link">
            Get started
          </a>
        </button>
      ) : (
        ""
      )} 
        {/* {social_Data === "twiter" ?  button :  "" } */}
      </div>
      </div>
      </div>
      </div>
      </div> 

      
           
           
          
    </>
  )
 }
  
export default Card;
