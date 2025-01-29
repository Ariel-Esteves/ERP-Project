import PropTypes from "prop-types";
import { use, useEffect } from "react";
import getProductsList from "../hooks/getProductsList";

const ProductForm = ({ saveProduct, setProductsList }) => {
  useEffect(() => {
    getProductsList(setProductsList);
  }, []);
  return (
    <form action="" id="form-container" className="row-3x col-2 ml-0 mb-0">
      <div className="col-4">
        <span>Cadastro</span>
        <h2>Cadastre-se Agora</h2>
        <p>Preencha o formulário para registrar um novo produto</p>
      </div>
      <div className="col-4">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>
      <div className="col-4">
        <label htmlFor="description">Descrição</label>
        <textarea id="description"></textarea>
      </div>
      <div className="col-1">
        <label htmlFor="price" className="fs-1">
          Preço
        </label>
        <input type="text" id="price" />
      </div>
      <div>
        <label htmlFor="category" className="fs-1">
          Categoria
        </label>
        <select id="category">
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
      </div>
      <div className="col-1">
        <label htmlFor="stock" className="fs-1">
          Estoque
        </label>
        <input type="text" id="stock" />
      </div>
      <div id="section-btn">
        <button onClick={(e) => saveProduct(e, setProductsList)} id="btn-1">
          Salvar
        </button>
      </div>
    </form>
  );
};

ProductForm.propTypes = {
  saveProduct: PropTypes.func.isRequired,
};

export default ProductForm;
