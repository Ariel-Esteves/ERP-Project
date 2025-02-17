import { useContext } from "react";
import PropTypes from "prop-types";
import { postAuth } from "../services/AuthService";
import { AuthContext } from "../infra/Context";

const ButtonLogin = () => {
  const { saveToken } = useContext(AuthContext);

  const getElId = (id) => document.getElementById(id);

  const postAuthFunc = async (e) => {
    const { token } = await postAuth(e);

    const user = getElId("login").value.trim();
    console.log(user);

    saveToken(token, user);
    console.log("Auth login successfullysss:" + token);
  };
  return (
    <div id="section-btn">
      <button id="btn-1" onClick={(e) => postAuthFunc(e)}>
        Login
      </button>
    </div>
  );
};
ButtonLogin.propTypes = {
  user: PropTypes.string.isRequired,
};

const LoginUser = () => {
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
          <form action="" id="form-container" className="ml-0">
            <div className="col-4">
              <span>Cadastro usuário</span>
              <h2>Cadastre-se Agora</h2>
              <p>Preencha o formulário abaixo</p>
            </div>
            <div className="col-4">
              <label htmlFor="login">login</label>
              <input type="text" id="login" />
            </div>
            <div className="col-4">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>

            <ButtonLogin />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
