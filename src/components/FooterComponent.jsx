const FooterComponent = () => {
  return (
    <footer id="container-4-col">
      <div id="container-img" className="p-3">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt="Imagem aqui"
          width={80}
          height={60}
        />
      </div>
      <div className="p-3">
        <h5>sobre nós</h5>
        <h5>contato</h5>
        <h5>suporte</h5>
      </div>
      <div className="p-3">
        <h5>Siga-nos</h5>
        <h5>Youtube</h5>
        <h5>Instagram</h5>
        <h5>Facebook</h5>
        <h5>Twiter</h5>
      </div>
      <div className="p-3">
        <h5>Inscreva-se</h5>
        <p>
          Inscreva-se em nosso boletim para atualizações sobre recursos e
          lançamentos
        </p>
        <div id="container-2">
          <input
            type="text"
            className="input-1"
            placeholder="Digite seu email"
          />
          <button id="btn-1">Inscrever-se</button>
        </div>
        <span>
          Ao se inscrever você concorda com nossa Política de privacidade e
          aceita receber Atualizações.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
