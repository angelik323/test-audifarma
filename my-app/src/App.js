import logo from './logo.svg';
import './App.css';
import Menu from './pages/Menu';
import Section2 from './pages/Section2';
import Services from './pages/Services';

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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> aquí va una sección de texto y atrás un video.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 123
          </a>
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
    </>
  );
}

export default App;
