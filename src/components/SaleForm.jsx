import { useRef, useState } from "react";
import PropTypes from "prop-types";
import FinalizationRegistrySale from "../hooks/finalizationRegistrySale";
import PersonComponent from "./PersonComponent";
import ProductListComponent from "./ProductListComponent";
import addProductCart from "../hooks/addProductCart";

const SaleForm = () => {
  const idRef = useRef(null);
  const personRef = useRef(null);
  const productRef = useRef(null);
  const dataRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);

  const total = carrinhoProdutos.reduce(
    (acc, produto) => acc + produto.paymentValue * produto.quantity,
    0
  );

  return (
    <form action="container-4-col" className="col-4 mx-1">
      <div id="form-container-8-col" className="m-0 py-2 col-4">
        <div className="col-1">
          <label htmlFor="id">ID:</label>
          <input type="string" className="border-none" id="id" ref={idRef} />
        </div>

        <div className="col-3">
          <PersonComponent personRef={personRef} />
        </div>
        <span className="col-3" />
        <div className="col-1">
          <label htmlFor="data">Data</label>
          <input className="input-1" type="date" id="data" ref={dataRef} />
        </div>
        <div className="col-2">
          <ProductListComponent productRef={productRef} />
        </div>
        <div className="col-1">
          <label htmlFor="price">Preço</label>
          <input className=" input-1 " type="text" id="price" ref={priceRef} />
        </div>
        <div className="col-1">
          <label htmlFor="quantity">Quantidade</label>
          <input
            className=" input-1 "
            type="text"
            id="quantity"
            ref={quantityRef}
          />
        </div>
        <span className="col-3" />
        <div className="col-1">
          <button
            id="btn-2"
            onClick={(e) =>
              addProductCart(
                e,
                productRef,
                priceRef,
                quantityRef,
                setCarrinhoProdutos
              )
            }
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
                {console.log("produto: " + produto.quantity)}
                <span>{produto.productInf}</span>
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
            FinalizationRegistrySale(e, personRef, carrinhoProdutos, total);
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
