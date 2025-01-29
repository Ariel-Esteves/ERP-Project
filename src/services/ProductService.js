import getProductsList from "../hooks/getProductsList";
import { PostMethod } from "../hooks/useFetch";

export const getProduct = async () =>
  (await fetch("http://localhost:8080/api/produto")).json();

export const saveProduct = async (e, setProductsList) => {
  e.preventDefault();
  const getElId = (id) => document.getElementById(id);
  const nome = getElId("name").value.trim();
  const valor = parseFloat(getElId("price").value);
  const description = getElId("description").value.trim();
  const category = getElId("category").value;
  const quantidade = parseInt(getElId("stock").value, 10);

  if (!nome || isNaN(valor) || !description || !category || isNaN(quantidade)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const product = { nome, valor, description, category, quantidade };

  await getProductsList(setProductsList);

  PostMethod(product, "http://localhost:8080/api/produto");
};
