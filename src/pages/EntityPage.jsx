import { useState } from "react";
import EntityForm from "../components/EntityForm";
import { getEntidade, saveEntidade } from "../services/EntityService";
import SearchEntityComponent from "../components/SearchEntityComponent";
import CarteiraComponent from "../components/WalletComponent";

const EntityPage = () => {
  return (
    <>
      <div id="container-4-col">
        <div className="col-2">
          <div className="container-img m-4 mr-0">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
              alt="img here"
            />
          </div>
          <div className="m-4">
            <CarteiraComponent />
          </div>
        </div>
        <div className="col-2">
          <EntityForm saveEntidade={saveEntidade} />
        </div>
      </div>
      <SearchEntityComponent requestMethod={getEntidade} />
      <CarteiraComponent />
    </>
  );
};

export default EntityPage;
