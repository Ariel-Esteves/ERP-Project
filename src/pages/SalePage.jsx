import { useEffect, useState } from "react";
import { requisitions } from "../services/SalePageService";
import SaleForm from "../components/SaleForm";

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

  useEffect(() => {
    requisitions([setProdutos, setEntidades, setVendas]);
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

        <SaleForm
          entidades={entidades}
          produtos={produtos}
          carrinhoProdutos={carrinhoProdutos}
          total={total}
          setCarrinhoProdutos={setCarrinhoProdutos}
        />
      </div>
      <div id="last-sales">
        <div id="container-img">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="Imagem de venda"
          />
        </div>
      </div>
    </>
  );
};

export default SalePage;
