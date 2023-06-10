import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Card from './dummy/Card';
 
// import Maxup from './dummy/Maxup';
// import Gold from './dummy/Gold';
import Menu from './Header/Menu'; 
// import Row from './Land/Header/Row2'; 
// import Card from './dummy/Card';
// import Gold from './dummy/Gold';
// import Maxup from './dummy/Maxup';
import Row2 from './Header/Row2';
import Compinfo from './Company comp/Compinfo';
import Partners from './Partner Component/Partners';
import Advice from './Advice component/Advice';
import Recent from './Recent Component/Recent';
import Coaches from './Land/Coaches';
import Footer from './Footer component/Footer';

 //call your card component here to display it in your home page.

  function App() {
    // let social_Data = "Maxup"

    return (
       <>
        <Menu/>
        <Row2/>
        <Compinfo/>
        <Partners/>
        <Advice/>
        <Recent/>
        <Coaches/>
        <Footer/>


      {/* <Card social_Data ={social_Data } />    
      
       <Gold  social_Data ={social_Data} /> 
      <Maxup  social_Data ={social_Data } />   */}
      </>

      )
      }

export default App;













//     <div>
//      {/* step 1: write your conditional statement and duplicate it on different cards. */}
//      <div className="cardsmple">
//             <div class="card-body">
//                 <h3 class="card-title">Starter pack</h3>
//                 <h4 class="card-subtitle mb-2 text-body-secondary">$0</h4>
//                 <h5 class="card-title">Features</h5>
//                   <ul>
//                     <li> Free hosting </li>
//                     <li> Free web domain </li>
//                     <li> Free web security</li>
//                     <li> Free database for 1 month </li>
//                   </ul>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="/" class="card-link">Get started</a>

//                         {/* step 2: write your tenary operator below*/}

//               </div>
//               </div>
 







//           {/* <div class="card">
//              <div class="card-body">
//               <h5 class="card-title">Gold package</h5>
//               <h6 class="card-subtitle mb-2 text-body-secondary">$20</h6>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="/" class="card-link">Card link</a>
//   <a href="/" class="card-link">Another link</a> */}
//           </div> 
          
    
//      </>
//   );
// }

// export default App;
