import './index.css';
//Comps
import Nav from './Components/Nav';
import { cakes } from './data'
import Footer from './Components/Footer';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import CakeInfo from './pages/CakeInfo';


function App() {
  return (
    <div className="App">
     <Nav />
    <Routes>
    <Route path="/" exact element={ <Home />} />
    <Route path="cakes" exact element={<Cakes cakes={cakes}/>} />
    <Route path= "cakes/1" element={<CakeInfo cakes={cakes}/>} />
    </Routes>
    <Footer />
    </div> 
    
   
  );
}

export default App;
