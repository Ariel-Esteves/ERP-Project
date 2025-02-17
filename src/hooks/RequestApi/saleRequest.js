import {
  deleteMethod,
  findMethod,
  getMethod,
  postMethod,
} from "../../infra/useFetch";
import { sale_url } from "../../infra/variables";

async function getSale() {
  return await getMethod(sale_url);
}

async function postSale(sale) {
  return await postMethod(sale, sale_url);
}

async function findSale(id) {
  return await findMethod(sale_url, id);
}

async function deleteSale(id) {
  return await deleteMethod(sale_url, id);
}

export { getSale, postSale, findSale, deleteSale };
