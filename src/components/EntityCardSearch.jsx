import selecionarProduto from "../hooks/selectProduct";

const EntityCardComponent = (pesquisados) => {
  return pesquisados.map((produto) => (
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
  ));
};

export default EntityCardComponent;
