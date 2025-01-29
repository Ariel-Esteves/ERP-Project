import selecionarProduto from "../hooks/selectProduct";
import pesquisaCadastro from "../hooks/PesquisaCadastro";
import PropTypes from "prop-types";

const SearchProductComponent = ({
  listaParaPesquisa,
  pesquisados,
  setPesquisados,
}) => {
  return (
    <div id="container-4-col" className="auto-row-h-auto">
      <form id="form-container" className="col-4 p-1 mb-0">
        <div className="flex-row w-50">
          <input
            type="text"
            onChange={(e) =>
              pesquisaCadastro(e, listaParaPesquisa, setPesquisados)
            }
          />
          <div className="flex-row">
            <button id="btn-2">
              <span>BUSCAR</span>
            </button>
          </div>
        </div>
      </form>
      <div id="container-4-col" className="col-4 mx-4 mb-4 bg-primary ">
        <div className="col-4 radius h-3 p-4" id="container-4-col">
          {pesquisados.map((produto) => (
            <div
              onClick={() => selecionarProduto(produto.id)}
              key={produto.id}
              className="p-1 bg-secondary radius"
            >
              <div>
                <span>Produto: </span>
                <h3>{produto.nome}</h3>
              </div>
              <div>
                <span>Preço: </span>
                <p>{produto.valor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
SearchProductComponent.propTypes = {
  listaParaPesquisa: PropTypes.array.isRequired,
  pesquisados: PropTypes.array.isRequired,
  setPesquisados: PropTypes.func.isRequired,
};

export default SearchProductComponent;
