//import logo from './logo.svg';
import './App.css';
import Menu from './pages/Menu';
import Section2 from './pages/Section2';
import Services from './pages/Services';
import Product from './pages/Product';
import PageNavegator from './pages/PageNavegator';

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
          <h1 className='titleSize'>Enabling brands to flow with change in order to grow 🚀</h1>
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
          <Product />
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
