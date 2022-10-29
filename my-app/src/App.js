//import logo from './logo.svg';
import './App.css';
import Menu from './pages/Menu';
import Section2 from './pages/Section2';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import PageNavegator from './pages/PageNavegator';
import video from './assets/video/video2.mp4';


function App() {
  return (
    <>
      <div className="Menu">
        <header className="Menu-header">
          <Menu />
        </header>
      </div>
      <div className="App">
        <header className="App-header">
          <div className='containerVideo'>
            <video src={video} className='videoItem' loop autoPlay muted> </video>
          </div>
          <div className='containerInfo'>
            <h1 className='titleSize'>Start sowing your future, growing with knowledge is now! 🚀</h1>
            <div className='buttonStyles'>
              <button type="button" class="btn buttonColor1 btn-lg">Get Started</button>
              <button type="button" class="btn buttonColor2 btn-lg">Get Quote</button>
              <a
                className='App-link targes'
                href="/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                /WEB DESIGN 
              </a>
              <a
              className='App-link targes'
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              >
              /BRANDING 
              </a>
              <a
              className='App-link targes'
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              >
                /MARKETING
              </a>
            </div>
            <h2 className='espacioMobile'>
              Your university within reach, you have knowledge in your hands. 🧠
            </h2>
            <br></br>
            <h2 className='espacioMobile'>You own your own dreams.</h2>
            
          </div>
        </header>
      </div>
      <div>
        <body className="background-section2">
          <Section2 />
        </body>
      </div>
      <div>
        <body className="background-services">
          <Services />
        </body>
      </div>
      <div>
        <body className="background-product">
          <Pricing />
        </body>
      </div>
      <div>
        <footer className="background-pageNavegator">
          <PageNavegator />
        </footer>
      </div>
    </>
  );
}

export default App;

