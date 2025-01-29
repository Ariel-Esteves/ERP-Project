import { getProduct } from "../services/ProductService";

const getProductsList = async (setProductsList) => {
  const [produtos] = await Promise.all([getProduct()]);
  setProductsList(() => [...produtos]);
};

export default getProductsList;
