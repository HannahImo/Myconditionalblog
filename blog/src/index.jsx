import Card from "./dummy/Card";
import Maxup from "./dummy/Maxup";

function Signup(Starterpack) {

    return (Starterpack ? Card : Maxup);
}


//this a ternary operator that explains that the function to be carried out is to signup a user for the starterpack package. 
    //return that the user successfully signups if he goes with the free items listed in card (which will now dim what is in maxup)
    //or show null. meaning that he wont be able to sign up without ticking the free items on the starter pack card.  

export default Signup;