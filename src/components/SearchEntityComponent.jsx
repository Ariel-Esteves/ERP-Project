import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ProductCardComponent from "./ProductCardComponent";
import searchData from "../hooks/searchData";

const SearchEntityComponent = ({ requestMethod }) => {
  const [listSearched, setListSearched] = useState([]);
  const [listToSearch, setListToSearch] = useState([]);

  const getListElement = async () => {
    const list = await requestMethod();
    setListToSearch(list);
  };
  useEffect(() => {
    getListElement();
    console.log("listToSearch: ", listToSearch);
  }, []);

  return (
    <div id="container-4-col" className="auto-row-h-auto">
      <form id="form-container" className="col-4 p-1 mb-0">
        <div className="flex-row w-50">
          <input
            type="text"
            onChange={(e) => searchData(e, listToSearch, setListSearched)}
          />
          <div className="flex-row">
            <button id="btn-2">
              <span>BUSCAR</span>
            </button>
          </div>
        </div>
      </form>
      <div className="col-4">
        <ProductCardComponent listSearched={listSearched} />
      </div>
    </div>
  );
};
SearchEntityComponent.propTypes = {
  requestMethod: PropTypes.func.isRequired,
};

export default SearchEntityComponent;
