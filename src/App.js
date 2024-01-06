import './index.css';
//Comps
import Nav from './Components/Nav';

import Landing from './Components/Landing';
import Highlights from './Components/Highlights';
import Featured from './Components/Featured';
import Discounted from './Components/Discounted';
import  Explore  from './Components/Explore';


function App() {
  return (
    <div className="App">
    
      <Nav />
      <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
    
    </div>
  );
}

export default App;
