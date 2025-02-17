import { useEffect, useState } from "react";
import { requisitions } from "../services/SalePageService";
import SaleForm from "../components/SaleForm";
import SearchEntityComponent from "../components/SearchEntityComponent";
import { getSale } from "../hooks/RequestApi/saleRequest";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

const SalePage = () => {
  const [produtos, setProdutos] = useState([]);
  const [entidades, setEntidades] = useState([]);
  const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
  const [sales, setSales] = useState([]);
  const total = carrinhoProdutos.reduce(
    (acc, produto) => acc + produto.paymentValue * produto.quantity,
    0
  );

  useEffect(() => {
    requisitions([setProdutos, setEntidades, setSales]);
  }, []);

  const personFilter = (sale) => {
    return entidades.filter((e) => sale.person == e.id)[0].name;
  };

  const saleMapPerson = (sales) => {
    return (
      <div id="form-container" className="col-4 mx-1">
        <span className="justify-center">Name</span>
        <span className="justify-center col-2">Payment Value</span>
        <span className="justify-center">Date</span>

        {sales.map((sale) => (
          <div
            id="form-container"
            className="shadow-none gap-0 col-4 my-0 mx-1"
            key={sale.id}
          >
            <span className="border-1 justify-center col-1">
              {personFilter(sale)}
            </span>
            <span className="border-1 justify-center col-2">
              {sale.paymentValue}
            </span>
            <span className="border-1 justify-center col-1">
              {formatDate(sale.dateValue)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="container-4-col" className="row-auto">
      <SaleForm
        entidades={entidades}
        produtos={produtos}
        carrinhoProdutos={carrinhoProdutos}
        total={total}
        setCarrinhoProdutos={setCarrinhoProdutos}
      />
      {saleMapPerson(sales)}
    </div>
  );
};

export default SalePage;
