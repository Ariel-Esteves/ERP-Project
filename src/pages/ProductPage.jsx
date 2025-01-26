import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import { PostMethod } from "../hooks/useFetch";

const ProductPage = () => {
  const [produtosLista, setProdutosLista] = useState([]);
  const [produtosPesquisados, setProdutosPesquisados] = useState([]);
  const saveProduct = async (e) => {
    e.preventDefault();
    const getElId = (id) => document.getElementById(id);
    const nome = getElId("name").value.trim();
    const valor = parseFloat(getElId("price").value);
    const description = getElId("description").value.trim();
    const category = getElId("category").value;
    const quantidade = parseInt(getElId("stock").value, 10);

    if (
      !nome ||
      isNaN(valor) ||
      !description ||
      !category ||
      isNaN(quantidade)
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const product = { nome, valor, description, category, quantidade };

    PostMethod(product);
  };

  const requisition = async () => {
    const [produtos] = await Promise.all([
      fetch("http://localhost:8080/api/produto"),
    ]);
    const produtosData = await produtos.json();
    setProdutosLista(() => [...produtosData]);
    console.log(produtosData);
  };

  const selecionarProduto = (id) => {
    const [produto] = produtosLista.filter((produto) => produto.id === id);
    console.log(produto);
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
    console.log();
  };

  const pesquisaProduto = (e) => {
    console.log(e.target.value);
    const pesquisaResultado = produtosLista.filter((produto) =>
      produto.nome.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProdutosPesquisados(() => [...pesquisaResultado]);
    console.log(pesquisaResultado);
  };
  useEffect(() => {
    requisition();
  }, []);

  return (
    <>
      <section id="container-4-col">
        <div className="container-img col-2 mr-0 row-1 m-4 mb-0">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="img here"
            className="radius"
          />
        </div>
        <div className="card2 bg-secondary ml-4 p-4 radius col-2 row-2">
          <div>
            <h3 className="fs-3">Estoque</h3>
          </div>
          <div className="flex-col h-auto">
            <div>
              <div>
                <p className="fs-1">Produtos:</p>
                <span id="estoque-quantidade">100</span>
              </div>
              <div>
                <p className="fs-1">
                  Entradas: <span id="estoque-entradas">100</span>
                </p>
                <p className="fs-1">
                  Saídas: <span id="estoque-saidas">0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card2 bg-secondary ml-4 p-4 radius col-2 row-3">
          <div>
            <h3 className="fs-3">Movimentações Financeiras</h3>
          </div>
          <div>
            <p className="fs-1">
              Total: <span>100</span>
            </p>
            <div>
              <p className="fs-1">
                Entradas: <span>100</span>
              </p>
              <p className="fs-1">
                Saídas: <span>0</span>
              </p>
            </div>
          </div>
        </div>
        <ProductForm saveProduct={saveProduct} />
      </section>
      <section>
        <form
          action=""
          id="form-container"
          className="row-1 b-1 col-4 m-3 p-1 b-0"
        >
          <div className="w-1 flex-row">
            <input onChange={(e) => pesquisaProduto(e)} />
            <button id="btn-2">Persquisar</button>
          </div>
        </form>
        <div id="container-6-col" className="col-4 m-3">
          {produtosPesquisados.map((produto) => (
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
      </section>
    </>
  );
};

export default ProductPage;
