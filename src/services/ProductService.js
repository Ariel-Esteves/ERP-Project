import { getMethod, postMethod } from "../infra/useFetch";
import { product_url } from "../infra/variables";

export const getProduct = async () => await getMethod(product_url);

const saveProduct = async (product) => {
  postMethod(product, product_url);
};

const getProducts = async () => await getMethod(product_url);

export { saveProduct, getProducts };
