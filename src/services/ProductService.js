import { getMethod, postMethod } from "../infra/useFetch";
import { product_url } from "../infra/variables";

export const getProduct = async () => await getMethod(product_url);

const saveProduct = async (e) => {
  e.preventDefault();
  const getElId = (id) => document.getElementById(id);
  const name = getElId("name").value.trim();
  const price = parseFloat(getElId("price").value);
  const stock = parseInt(getElId("stock").value, 10);

  if (!name || isNaN(price) || isNaN(stock)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const product = { name, price, stock, role: "USER" };

  postMethod(product, product_url);
};

const getProducts = async () => await getMethod(product_url);

export { saveProduct, getProducts };
