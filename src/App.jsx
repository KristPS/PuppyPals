import {puppyList} from './data.js'
import { useState } from 'react'
import './path-to-css.css'
 
function App() {
 
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
 
  const [featPupId, setFeatPupid] = useSate(0);

  function handleClick() {
  const featuredPup = puppies.find(pup.id === featPupId)
  console.log("featuredPup: ", featuredPup);
  }
  return (
    
      <div className="App">
        <p featPupId={featPupId}></p>
        {puppies.map((puppy) => {
          return (
          <p onClick={handleClick} key={puppy.id}>{puppy.name}
          </p>
        );
     })} 
    </div>
  );
}

 {featPupId && (
  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
  </div>
 )}   
      
      
      
export default App
