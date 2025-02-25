import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../infra/AuthContext";

const NavBar = () => {
  const { token, loading } = useContext(AuthContext);

  if (loading) return null;

  console.log("nav: " + token);
  return (
    <nav id="navbar" className="flex-row">
      <Link to="/" className="px-5">
        <h1>Logo</h1>
      </Link>

      <div id="options-navbar">
        {!token && (
          <ul className="flex-row w-2">
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
        )}
        {token && (
          <ul className="flex-row w-2">
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
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="right px-5" id="section-btn">
        <Link to={"/login"}>
          <button id="btn-2">Entrar</button>
        </Link>
        <Link to="/signup">
          <button id="btn-1">Registrar</button>
        </Link>
        <Link to="/signup">
          <button id="btn-1">sair</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
