import {puppyList} from './data.js'
import { useState } from 'react'
 
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);

  return (
    <>
      <div className="App">
     {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })
      }
        
      </div>
      
    
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
