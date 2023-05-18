import Maxup from '../dummy/Maxup'; 

 function Card () {
  return (
    <>
    
      <div>
      <div>
      {/* step 1: write your card content and duplicate it. */}
      
      <div className="cardsmple">
        <div class="card-body">
           <h3 class="card-title">Starter pack</h3>
           <h4 class="card-subtitle mb-2 text-body-secondary">$0</h4>
           <h5 class="card-title">Features</h5>
             <ul>
               <li> Free hosting </li>
               <li> Free web domain </li>
             </ul>
             <Maxup/>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <button onClick={Card}> Signup </button>
                   </div>
                   </div>
          </div>
          </div>
    </>
  )
 }
  
export default Card;
