import selecionarProduto from "../hooks/selectProduct";

const ProductCardComponent = (listSearched) => {
  return listSearched.map((product) => (
    <div
      onClick={() => selecionarProduto(product.id)}
      key={product.id}
      className="p-1 bg-secondary radius"
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

export default ProductCardComponent;
