import PropTypes from "prop-types";
import { saveProduct } from "../services/ProductService";
import { useRef } from "react";
const ProductForm = () => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      stock: stockRef.current.value,
    };
    saveProduct(product);
  };

  return (
    <form action="" id="form-container" className="row-3x col-2 ml-0 mb-0">
      <div className="col-4">
        <span>Cadastro</span>
        <h2>Cadastre-se Agora</h2>
        <p>Preencha o formulário para registrar um novo produto</p>
      </div>
      <div className="col-4">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className="col-4">
        <label htmlFor="price" className="fs-1">
          Preço
        </label>
        <input type="text" id="price" ref={priceRef} />
      </div>

      <div className="col-4">
        <label htmlFor="stock" className="fs-1">
          Estoque
        </label>
        <input type="number" id="stock" ref={stockRef} />
      </div>
      <div id="section-btn">
        <button onClick={handleSaveProduct} id="btn-1">
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
