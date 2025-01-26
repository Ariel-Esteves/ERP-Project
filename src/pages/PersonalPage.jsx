const PersonalPage = () => {
  return (
    <div id="profile-section">
      <div id="container-img">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
          alt="img here"
        />
      </div>
      <div>
        <h3>Olá Ariel</h3>
        <div>
          <p>
            Carteira: <span>5.000</span>
          </p>
          <div>
            <p>
              Entradas: <span>5.000</span>
            </p>
            <p>
              Saídas: <span>960.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
