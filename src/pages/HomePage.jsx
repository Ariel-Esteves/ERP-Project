const HomePage = () => {
  return (
    <div id="container" className="my-3">
      <div className="row-1 col-2 px-3">
        <h3 className="fs-3">Controle Financeiro Simplificado para sua Casa</h3>
      </div>
      <div className="row-1  col-2 px-3">
        <p className="fs-1">
          Descubra uma maneira prática de gerenciar suas finanças pessoais com
          nosso sistema. Registre suas movimentações, controle seu estoque e
          visualize seus gastos de forma simples e eficiente.
        </p>
        <div id="section-btn">
          <button id="btn-1">Começar</button>
          <button id="btn-2">Saiba Mais</button>
        </div>
      </div>

      <div className="container-img row-2 col-4  my-3">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt=""
        />
      </div>

      <div className="row-3 col-4 px-3">
        <h3 className="fs-3">Gerencie suas finanças de forma eficiente</h3>
        <p>
          Nosso sistema oferece uma gestão completa de produtos e entidades.
          Monitore suas movimentações financeiras e mantenha o saldo sempre em
          dia.
        </p>
      </div>
      <div id="container-4-col" className="row-4 col-4 mx-3">
        <div className="card row-1 col-1 mt-3">
          <div className="container-img">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="imagem aqui"
            />
          </div>
          <div>
            <h4 className="fs-1">Gestão de produtos</h4>
            <p>
              Cadastre e controle os produtos com facilidade, garantindo sempre
              a reposição necessária.
            </p>
          </div>
        </div>
        <div className="card  mt-3">
          <div className="container-img">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="imagem aqui"
            />
          </div>
          <div>
            <h4 className="fs-1">Registro de entidades</h4>
            <p>
              Mantenha um registro organizado de todas as entidades relacionadas
              às suas finanças.
            </p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="container-img">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="imagem aqui"
            />
          </div>
          <div>
            <h4 className="fs-1">Movimentações Financeiras</h4>
            <p>
              Registre e acompanhe todas as suas movimentações financeiras em um
              só lugar.
            </p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="container-img">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="imagem aqui"
            />
          </div>
          <div>
            <h4 className="fs-1">Monitoramento de Saldo</h4>
            <p>Verifique seu saldo atual e planeje melhor seus gastos.</p>
          </div>
        </div>
      </div>

      <div id="section-btn" className="row-5 col-2 mx-5">
        <button id="btn-2">Saiba Mais</button>
        <button id="btn-3">Começar</button>
      </div>

      <div className="row-6 col-2 my-3">
        <div className="container-img px-3">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="Imagem aqui"
          />
        </div>
      </div>
      <div className="row-6 col-2 px-2 my-3">
        <div>
          <h3 className="fs-2">
            Descubra como otimizar suas finanças com nosso sistema de controle
            financeiro.
          </h3>
          <p>
            Com nosso sistema, você terá um controle financeiro aprimorado e
            simplificado. Registre suas movimentações de forma intuitiva e tenha
            uma visão clara dos seus gastos.
          </p>
        </div>
        <div id="container-4-col" className="">
          <div className="col-2">
            <h4 className="fs-1">Controle Financeiro</h4>
            <p>
              Acompanhe suas finanças com relatórios detalhados e insights
              valiosos.
            </p>
          </div>
          <div className="col-2">
            <h4 className="fs-1">Facilidade de Uso</h4>
            <p>
              Interface amigável que torna o registro de despesas simples e
              rápido.
            </p>
          </div>
        </div>
      </div>

      <section className="row-7 col-4 relative">
        <div className="container-img">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="Imagem aqui"
          />
        </div>
        <div className="absolute m-4">
          <div>
            <h3 className="fs-3">Comece a controlar suas finanças</h3>
            <p className="fs-1">
              Cadastre-se agora e tenha total controle sobre suas movimentações
              financeiras de forma simples e prática.
            </p>
          </div>
          <div id="section-btn">
            <button id="btn-1">Cadastre-se</button>
            <button id="btn-2">Saiba Mais</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
