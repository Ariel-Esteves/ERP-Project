import { postSale } from "./RequestApi/saleRequest";

export default async function FinalizationRegistrySale(
  e,
  personRef,
  carrinhoProdutos,
  total
) {
  e.preventDefault();
  const body = {
    paymentValue: total,
    saleType: 1,
    person: personRef.current.value,
    movementSale: carrinhoProdutos,
  };

  postSale(body);
}
