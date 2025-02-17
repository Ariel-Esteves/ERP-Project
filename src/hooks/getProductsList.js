import { getProduct } from "../services/ProductService";

const getProductsList = async (setProductsList) => {
  const [produtos] = await Promise.all([getProduct()]);
  if (produtos.length < 1) return;
  setProductsList(() => [...produtos]);
};

export default getProductsList;
