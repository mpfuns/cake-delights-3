import './index.css';
//Comps
import Nav from './Components/Nav';

import dataSeller from "./data-seller"
import dataLast from "./data-lastest"
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
    
      <Nav />
      <Landing />
    
    </div>
  );
}

export default App;
