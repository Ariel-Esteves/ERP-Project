import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { PostAuth } from "../services/AuthService";
import AuthContext from "../infra/AuthContext";

const ButtonLogin = ({ user }) => {
  const { saveToken, removeToken } = useContext(AuthContext);

  return (
    <div id="section-btn">
      <button id="btn-1" onClick={() => PostAuth(user, saveToken, removeToken)}>
        Login
      </button>
    </div>
  );
};
ButtonLogin.propTypes = {
  user: PropTypes.object.isRequired,
};

const LoginUser = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div id="container-4-col">
        <div className="container-img m-4 mr-0 col-2">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="img here"
          />
        </div>
        <div className="col-2">
          <form
            action=""
            id="form-container"
            className="ml-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="col-4">
              <span>Cadastro usuário</span>
              <h2>Cadastre-se Agora</h2>
              <p>Preencha o formulário abaixo</p>
            </div>
            <div className="col-4">
              <label htmlFor="login">login</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="col-4">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <ButtonLogin user={{ login, password }} />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
