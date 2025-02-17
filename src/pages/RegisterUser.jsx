import { useContext } from "react";
import { saveAuth } from "../services/AuthService";
import { AuthContext } from "../infra/Context";

const ButtonRegister = () => {
  const saveAuthFunc = (e) => {
    saveAuth(e);
    console.log("Auth saved successfully:");
  };
  return (
    <div id="section-btn">
      <button id="btn-1" onClick={(e) => saveAuthFunc(e)}>
        Salvar
      </button>
    </div>
  );
};

const RegisterUser = () => {
  const { token } = useContext(AuthContext);
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
            <div>
              <label htmlFor="password">Confirme a senha</label>
              <input type="password" id="password" />
            </div>

            {!token && (
              <div>
                <label htmlFor="role">role</label>
                <input type="role" id="role" />
              </div>
            )}
            <ButtonRegister />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
