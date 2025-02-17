import useFetch from "../../infra/useFetch";
import { stock_url } from "../../infra/variables";

async function getstock() {
  return await useFetch.getMethod(stock_url);
}

async function poststock(stock) {
  return await useFetch.postMethod(stock, stock_url);
}

async function findstock(id) {
  return await useFetch.findMethod(stock_url, id);
}

async function deletestock(id) {
  return await useFetch.deleteMethod(stock_url, id);
}

export { getstock, poststock, findstock, deletestock };
