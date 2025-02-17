import useFetch from "../../infra/useFetch";
import { product_url } from "../../infra/variables";

async function getproduct() {
  return await useFetch.getMethod(product_url);
}

async function postproduct(product) {
  return await useFetch.postMethod(product, product_url);
}

async function findproduct(id) {
  return await useFetch.findMethod(product_url, id);
}

async function deleteproduct(id) {
  return await useFetch.deleteMethod(product_url, id);
}

export { getproduct, postproduct, findproduct, deleteproduct };
