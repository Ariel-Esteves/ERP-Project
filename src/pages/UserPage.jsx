const UserPage = () => {
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
            <div>
              <span>Cadastro usuário</span>
              <h2>Cadastre-se Agora</h2>
              <p>Preencha o formulário abaixo</p>
            </div>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label htmlFor="password">Confirme a senha</label>
              <input type="password" id="password" />
            </div>
            <div id="section-btn">
              <button id="btn-1">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserPage;
