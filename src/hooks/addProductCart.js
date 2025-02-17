export default function addProductCart(e, products, setCarrinhoProducts) {
  e.preventDefault();
  const product = document.getElementById("product").value;
  const paymentValue = document.getElementById("price").value;
  const productInf = products.find((prod) => prod.id == product);

  const quantity = document.getElementById("quantity").value;
  console.log({ productInf, product, paymentValue, quantity });
  setCarrinhoProducts((prevState) => [
    ...prevState,
    { productInf, product, paymentValue, quantity },
  ]);
}
