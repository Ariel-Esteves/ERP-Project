import addProductCart from "../hooks/addProductCart";
import FinalizationRegistrySale from "../hooks/finalizationRegistrySale";
import PropTypes from "prop-types";
import PersonComponent from "./PersonComponent";
import ProductListComponent from "./ProductListComponent";

const SaleForm = ({
  entidades,
  produtos,
  carrinhoProdutos,
  setCarrinhoProdutos,
  total,
}) => {
  return (
    <form action="container-4-col" className="col-4 mx-1">
      <div id="form-container-8-col" className="m-0 py-2 col-4">
        <div className="col-1">
          <label htmlFor="id">ID:</label>
          <input type="string" className="border-none" id="id" />
        </div>

        <div className="col-3">
          <PersonComponent />
        </div>
        <span className="col-3" />
        <div className="col-1">
          <label htmlFor="data">Data</label>
          <input className="input-1" type="date" id="data" />
        </div>
        <div className="col-2">
          <ProductListComponent />
        </div>
        <div className="col-1">
          <label htmlFor="price">Preço</label>
          <input className=" input-1 " type="text" id="price" />
        </div>
        <div className="col-1">
          <label htmlFor="quantity">Quantidade</label>
          <input className=" input-1 " type="text" id="quantity" />
        </div>
        <span className="col-3" />
        <div className="col-1">
          <button
            id="btn-2"
            onClick={(e) => addProductCart(e, produtos, setCarrinhoProdutos)}
          >
            +
          </button>
        </div>
      </div>
      <div id="container-4-col" className="col-8 h-2 my-1 shadow">
        <div className="col-4 mr-0 bg-primary">
          <div className="flex-row py-1 bg-secondary radius">
            <span>Nome</span>
            <span>Quantidade</span>
            <span>Valor</span>
          </div>
          <div className="px-3 bg-primary p-1 radius">
            {console.log("carrinho: " + carrinhoProdutos)}
            {carrinhoProdutos.map((produto) => (
              <div className="flex-row my-1" key={produto.id}>
                <span>{produto.productInf.name}</span>
                <span>{produto.quantity}</span>
                <span>{produto.paymentValue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>Total</span>
          <span>{total}</span>
        </div>
        <button
          onClick={(e) => {
            FinalizationRegistrySale(e, entidades, carrinhoProdutos, total);
          }}
          id="btn-1"
        >
          Finalizar
        </button>
      </div>
    </form>
  );
};
SaleForm.propTypes = {
  entidades: PropTypes.array.isRequired,
  produtos: PropTypes.array.isRequired,
  carrinhoProdutos: PropTypes.array.isRequired,
  setCarrinhoProdutos: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default SaleForm;
