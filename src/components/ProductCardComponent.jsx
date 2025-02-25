import selecionarProduto from "../hooks/selectProduct";

const ProductCardComponent = ({ listSearched }) => {
  const mapData = () => {
    return listSearched.map((product) => (
      <div
        onClick={() => selecionarProduto(product.id)}
        key={product.id}
        className="p-1 bg-secondary radius col-1 "
      >
        <div>
          <span>Produto: </span>
          <h3>{product.name}</h3>
        </div>
        <div>
          <span>Preço: </span>
          <p>{product.paymentValue}</p>
        </div>
      </div>
    ));
  };
  return (
    <div id="container" className="row-fr h-4 p-4">
      {mapData()}
    </div>
  );
};

export default ProductCardComponent;
