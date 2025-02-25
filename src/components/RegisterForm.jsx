import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { SaveAuth } from "../services/AuthService";
import AuthContext from "../infra/AuthContext";

const ButtonRegister = ({ setUser, auth }) => {
  const { saveToken, removeToken } = useContext(AuthContext);
  const saveData = () => {
    SaveAuth(auth, saveToken, removeToken);
    setUser(auth.login);
  };
  console.log("auth", auth);
  return (
    <div id="section-btn">
      <button id="btn-1" onClick={() => saveData()}>
        Salvar
      </button>
    </div>
  );
};
ButtonRegister.propTypes = {
  setUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const RegisterForm = ({ setUserRegistered }) => {
  const { token } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [login, setLogin] = useState("");

  const auth = {
    login,
    password,
    role,
  };

  return (
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
          <div>
            <label htmlFor="password">Confirme a senha</label>
            <input type="password" id="password" />
          </div>

          {!token && (
            <div>
              <label htmlFor="role">role</label>
              <input
                type="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          )}
          <ButtonRegister auth={auth} setUser={setUserRegistered} />
        </form>
      </div>
    </div>
  );
};
RegisterForm.propTypes = {
  setUserRegistered: PropTypes.func.isRequired,
};

export default RegisterForm;
