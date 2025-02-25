import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSale } from "../hooks/RequestApi/saleRequest";
import { getPerson } from "../hooks/RequestApi/personRequest";

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

const SaleRegistersComponent = () => {
  const [sales, setSales] = useState([]);
  const [person, setPerson] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [salesFilteredList, setSalesFilteredList] = useState([]);
  const localPath = window.location.pathname;
  const formatDateString = (dateString) => {
    return dateString.split("T")[0];
  };

  useEffect(() => {
    getSale(setSales);
    getPerson(setPerson);
  }, []);

  const personFilter = (sale) => {
    const [personFiltered] = person.filter((e) => sale.person == e.id);
    return personFiltered.name;
  };
  useEffect(() => {
    if (nameFilter === "" && dateFilter === "") {
      setSalesFilteredList(sales);
      return;
    } else if (nameFilter === "" && dateFilter !== "") {
      setSalesFilteredList(
        sales.filter((sale) => formatDateString(sale.dateValue) === dateFilter)
      );
      return;
    } else if (nameFilter !== "" && dateFilter === "") {
      setSalesFilteredList(
        sales.filter((sale) => personFilter(sale).includes(nameFilter))
      );
      return;
    } else {
      setSalesFilteredList(
        sales.filter(
          (sale) =>
            formatDateString(sale.dateValue) === dateFilter &&
            personFilter(sale).includes(nameFilter)
        )
      );
    }
  }, [nameFilter, dateFilter]);

  return (
    <div id="form-container" className="gap-0 col-4 mx-1">
      <div className="mx-3 col-1">
        <label className="fs-1" htmlFor="name-filter">
          Nome:{" "}
        </label>
        <input
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.target.value);
          }}
          type="text"
          id="name-filter"
        />
      </div>
      <div className="mx-3 col-1">
        <label className="fs-1" htmlFor="date-filter">
          Date:{" "}
        </label>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => {
            setDateFilter(e.target.value);
            console.log(e.target.value);
          }}
          id="date-filter"
        />
      </div>
      <span className="col-2" />
      <span className="justify-center">Name</span>
      <span className="justify-center col-2">Payment Value</span>
      <span className="justify-center">Date</span>

      <div id="form-container" className="shadow-none gap-0 col-4 my-0 mx-1">
        {salesFilteredList.map((sale) => (
          <Link
            to={localPath + "/" + sale.id}
            className="col-4 flex-row p-0"
            key={sale.id}
          >
            <span className="border-1 justify-center">
              {personFilter(sale)}
            </span>
            <span className="border-1 justify-center">{sale.paymentValue}</span>
            <span className="border-1 justify-center">
              {formatDate(sale.dateValue)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaleRegistersComponent;
