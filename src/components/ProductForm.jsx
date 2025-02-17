import PropTypes from "prop-types";
import { saveProduct } from "../services/ProductService";

const ProductForm = () => {
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
        <label htmlFor="price" className="fs-1">
          Preço
        </label>
        <input type="text" id="price" />
      </div>

      <div className="col-4">
        <label htmlFor="stock" className="fs-1">
          Estoque
        </label>
        <input type="number" id="stock" />
      </div>
      <div id="section-btn">
        <button onClick={saveProduct} id="btn-1">
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
