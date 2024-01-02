import './index.css';
//Comps
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Features from './Components/Features';
import Latest from './Components/Latest';
import Footer from './Components/Footer';
//data
import dataSeller from "./data-seller"
import dataLast from "./data-lastest"


function App() {
  return (
    <div className="App">
    <section id='landing'>
      <Nav />
    <Header />
    </section>
    <main>
    <div id="both_wave">
    <div id='top_wave' >
    <div className='wave_container' >
    <img  className='wave-img' src='topwave.svg'/>
    </div>
    </div>
    <Highlights />
    <div id='bottom_wave' >
    <div className='wave_container' >
    <img  src='bottom-svgbetter.svg'/>
    </div>
      </div>
    </div>
    <Features data={dataSeller} />
    <Latest data={dataLast}/>
    <section id="explore">
    <div className="container">
    <div className="big-row row_column">
<h2>Explore more <span className="neon-blue">Cakes</span></h2>
<a href='#features'>
<button className='btn '> Browse Cakes</button>
</a>
</div>
</div>
    </section>
    </main>
    <Footer />
    </div>
  );
}

export default App;
