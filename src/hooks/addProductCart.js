export default function addProductCart(e, produtos, setCarrinhoProdutos) {
  e.preventDefault();
  const produto_id = document.getElementById("produto-select").value;
  const produto = produtos.find((produto) => produto.id == produto_id);
  const valor = document.getElementById("preco").value;
  const quantidade = document.getElementById("quantidade").value;
  setCarrinhoProdutos((prevState) => [
    ...prevState,
    { produto_id, produto, valor, quantidade },
  ]);
}
