import { useEffect } from "react";

const StockPage = () => {
  const requisition = async () => {
    const response = await fetch("http://localhost:8080/api/stock");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    requisition();
  }, []);
  return <div>Stock</div>;
};

export default StockPage;
