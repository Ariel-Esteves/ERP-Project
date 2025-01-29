import addProductCart from "../hooks/addProductCart";
import FinalizationRegistrySale from "../hooks/finalizationRegistrySale";
import PropTypes from "prop-types";

const SaleForm = ({
  entidades,
  produtos,
  carrinhoProdutos,
  setCarrinhoProdutos,
  total,
}) => {
  return (
    <form action="" id="form-container" className="col-2 ml-0">
      <div>
        <label htmlFor="entidade">Entidade</label>
        <select id="entidade-select">
          {entidades.map((entidade) => (
            <option key={entidade.id} value={entidade.id}>
              {entidade.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="data">Data</label>
        <input className=" input-1 " type="date" id="data" />
      </div>
      <div id="container-2">
        <div className="col-1">
          <label htmlFor="produto"> Produto</label>
          <select id="produto-select">
            {produtos.map((produto) => (
              <option key={produto.id} value={produto.id}>
                {produto.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="col-1">
          <label htmlFor="preco">Preço</label>
          <input className=" input-1 " type="text" id="preco" />
        </div>
        <div className="col-1">
          <label htmlFor="quantidade">Quantidade</label>
          <input className=" input-1 " type="text" id="quantidade" />
        </div>
        <div id="container-img" className="col-1">
          <button
            id="btn-2"
            onClick={(e) => addProductCart(e, produtos, setCarrinhoProdutos)}
          >
            +
          </button>
        </div>
      </div>
      <div>
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
