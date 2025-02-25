import { product_url } from "../infra/variables";
import { getProduct } from "../services/ProductService";

export default async function addProductCart(
  e,
  productRef,
  paymentValueRef,
  quantityRef,
  setCarrinhoProducts
) {
  e.preventDefault();
  const id = productRef.current.value;
  const paymentValue = paymentValueRef.current.value;
  const quantity = quantityRef.current.value;

  const request = await getProduct(product_url);
  const [filteredData] = await request.filter(
    (product) => product.id === Number(id)
  );

  let body = {
    productInf: filteredData.name,
    product: id,
    paymentValue,
    quantity,
  };

  setCarrinhoProducts((prevState) => [...prevState, body]);
}
