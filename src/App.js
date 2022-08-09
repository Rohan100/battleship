import { useState } from 'react';
import './App.css';
import Provider from './context';
import Home from './component/Home';
import SetupGame from './component/SetupGame'
function App() {
  const [start,setStart] = useState(false)

  return (
    <div className="App">
      <Provider>
      {
        start ? <SetupGame /> : <Home startGame={setStart}/> 
      }
      </Provider>
    </div>
  ); 
}

export default App;
