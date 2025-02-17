import { postSale } from "./RequestApi/saleRequest";

export default async function FinalizationRegistrySale(
  e,
  entidades,
  carrinhoProdutos,
  total
) {
  e.preventDefault();
  console.log(total, "total");
  const entity_id = document.getElementById("person").value;
  const person = entidades.find((entidade) => entidade.id == entity_id);

  const body = {
    paymentValue: total,
    saleType: 1,
    person: person.id,
    movementSale: carrinhoProdutos,
  };

  postSale(body);
}
