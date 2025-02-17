import CarteiraComponent from "../components/CarteiraComponent";

const PersonalPage = () => {
  return (
    <div id="container-4-col">
      <div className="relative col-4">
        <div className="container-img">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="img here"
          />
          <div className="left-botton">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="img here"
              className="profile-img"
            />
          </div>
        </div>
      </div>
      <div className="col-2"></div>
      <div className="col-1 left">
        <CarteiraComponent />
      </div>
      <div className="col-1 left">
        <CarteiraComponent />
      </div>
    </div>
  );
};

export default PersonalPage;
