import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [logged, setLogged] = useState(false);
  return (
    <nav id="navbar" className="flex-row">
      <Link to="/" className="px-5">
        <h1>Logo</h1>
      </Link>
      <div id="options-navbar">
        <ul style={logged ? { display: "none" } : {}} className="flex-row w-2">
          <li>
            <Link to="/">Início Rápido</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/funcionalidade">Funcionalidade</Link>
          </li>
        </ul>
        <ul style={!logged ? { display: "none" } : {}} className="flex-row w-2">
          <li>
            <Link to="/venda">Venda</Link>
          </li>
          <li>
            <Link to="/entidade">Entidade</Link>
          </li>
          <li>
            <Link to="/produto">Produto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="right px-5" id="section-btn">
        <Link to={"/user/1"}>
          <button id="btn-2" onClick={() => setLogged((prev) => !prev)}>
            Entrar
          </button>
        </Link>
        <Link to="/login">
          <button id="btn-1">Registrar</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
