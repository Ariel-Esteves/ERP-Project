export default function selecionarProduto(id, produtosLista) {
  const [produto] = produtosLista.filter((produto) => produto.id === id);
  const getElId = (id) => document.getElementById(id);
  const quantidade = produto.estoque.estoqueMovimentoEntity.reduce(
    (acc, movimento) => {
      return movimento.quantidade + acc;
    },
    0
  );
  const entradas = produto.estoque.estoqueMovimentoEntity.reduce(
    (acc, movimento) => {
      if (movimento.tipo === "ENTRADA") {
        return movimento.quantidade + acc;
      }
      return acc;
    },
    0
  );
  const saidas = produto.estoque.estoqueMovimentoEntity.reduce(
    (acc, movimento) => {
      if (movimento.tipo === "SAIDA") {
        return movimento.quantidade - acc;
      }
      return acc;
    },
    0
  );
  getElId("name").value = produto.nome.trim();
  parseFloat((getElId("price").value = produto.valor));
  getElId("description").value = produto.description?.trim();
  getElId("category").value = produto.estoque.categoria;
  getElId("stock").value = parseInt(produto.estoque.quantidade, 10);
  getElId("estoque-quantidade").textContent = quantidade;
  getElId("estoque-entradas").textContent = entradas;
  getElId("estoque-saidas").textContent = saidas;
  produto.estoque.estoqueMovimentoEntity.quantidade;
}
