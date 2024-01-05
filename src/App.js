import './index.css';
//Comps
import Nav from './Components/Nav';

import dataSeller from "./data-seller"
import dataLast from "./data-lastest"
import Landing from './Components/Landing';
import Highlights from './Components/Highlights';
import Featured from './Components/Featured';


function App() {
  return (
    <div className="App">
    
      <Nav />
      <Landing />
    <Highlights />
    <Featured />
    
    </div>
  );
}

export default App;
