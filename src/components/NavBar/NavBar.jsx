import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src="../../../public/valentisf.png" alt="Logo Valenti" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">Inicio</li>
            <li className="nav-item">Productos</li>
            <li className="nav-item">Nosotros</li>
            <li className="nav-item">Contacto</li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
