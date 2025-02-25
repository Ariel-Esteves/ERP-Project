import {
  deleteMethod,
  findMethod,
  getMethod,
  postMethod,
} from "../../infra/useFetch";
import { sale_url } from "../../infra/variables";

async function getSale(setData = null) {
  const response = await getMethod(sale_url);
  if (setData) {
    setData(response);
    return;
  }
  return response;
}

async function postSale(sale) {
  return await postMethod(sale, sale_url);
}

async function findSale(setData = null, id) {
  if (setData) {
    const response = await findMethod(sale_url, id);
    setData(response);
    return;
  }
  return await findMethod(sale_url, id);
}

async function deleteSale(id) {
  return await deleteMethod(sale_url, id);
}

export { getSale, postSale, findSale, deleteSale };
