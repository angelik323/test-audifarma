import '../css/menu.css';
import logoTest from '../assets/img/test-audifarma-logo.png';

function Menu() {
  return (
    <nav className="navFijo navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={logoTest} className="logo-test navbar-brand" alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-flex align-items-end" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#our">Our</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#services">Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link itemMenu" href="/#generic_price_table">Pricing</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    
  );
}

export default Menu;
