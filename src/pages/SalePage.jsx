import { useEffect, useState } from "react";

const formatDate = (dateString) => {
  const options = { month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

const SalePage = () => {
  const [produtos, setProdutos] = useState([]);
  const [entidades, setEntidades] = useState([]);
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
  const [vendas, setVendas] = useState([]);
  const total = carrinhoProdutos.reduce(
    (acc, produto) => acc + produto.valor * produto.quantidade,
    0
  );
  const requisitions = async () => {
    const [produtosResponse, entidadesResponse, vendasResponse] =
      await Promise.all([
        fetch("http://localhost:8080/api/produto"),
        fetch("http://localhost:8080/api/entidade"),
        fetch("http://localhost:8080/api/vendas"),
      ]);
    const produtos = await produtosResponse.json();
    const entidades = await entidadesResponse.json();
    const vendas = await vendasResponse.json();
    setProdutos(() => [...produtos]);
    setEntidades(() => [...entidades]);
    setVendas(() => [...vendas]);
    console.log(produtos, entidades, vendas);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const produto_id = document.getElementById("produto-select").value;
    console.log(produto_id, produtos);
    const produto = produtos.find((produto) => produto.id == produto_id);
    const valor = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    console.log("test", { produto, valor, quantidade });
    setCarrinhoProdutos((prevState) => [
      ...prevState,
      { produto_id, produto, valor, quantidade },
    ]);
  };

  const FinalizationRegistry = async (e) => {
    e.preventDefault();
    const entidade_id = document.getElementById("entidade-select").value;
    const entidade = entidades.find((entidade) => entidade.id == entidade_id);
    const body = {
      valor: total,
      tipoVenda: { nome: "teste" },
      entidade,
      vendaMovimento: carrinhoProdutos,
    };

    const sendSale = () =>
      fetch("http://localhost:8080/api/vendas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    console.log("body", body);
    try {
      const response = await sendSale();
      if (response.status !== 200) {
        throw new Error("Erro ao realizar a venda");
      }
      alert("Venda realizada com sucesso!");
    } catch (error) {
      console.error("Erro ao realizar a venda:", error);
      alert("Erro ao realizar a venda. Tente novamente.");
    }
  };

  useEffect(() => {
    requisitions();
  }, []);
  return (
    <>
      <div id="container-4-col" className="relative">
        <div className="col-2 m-4 mr-0 p-5 bg-primary">
          <div className="flex-row px-3 bg-secondary p-1 radius">
            <span>Nome</span>
            <span>Quantidade</span>
            <span>Valor</span>
          </div>
          <div className="px-3 bg-primary p-1 radius shadow">
            {carrinhoProdutos.map((produto) => (
              <div className="flex-row my-1" key={produto.id}>
                <span>{produto.produto.nome}</span>
                <span>{produto.quantidade}</span>
                <span>{produto.valor}</span>
              </div>
            ))}
          </div>
          <div className="absolute center">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>

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
              <button id="btn-2" onClick={(e) => addProduct(e)}>
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={(e) => {
                FinalizationRegistry(e);
              }}
              id="btn-1"
            >
              Finalizar
            </button>
          </div>
        </form>
      </div>
      <div id="last-sales">
        <div id="container-img">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="Imagem de venda"
          />
        </div>
        <div id="list-sale">
          <div>
            <span>Entidade</span>
            <span>Valor</span>
            <span>Data</span>
          </div>
          {vendas.map((venda) => (
            <div key={venda.id}>
              <div>
                <span>{venda.entidade.nome}</span>
                <span>{venda.valor}</span>
                <span>{formatDate(venda.data)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SalePage;
