import { PostMethod } from "./useFetch";

export default async function FinalizationRegistrySale(
  e,
  entidades,
  carrinhoProdutos,
  total
) {
  e.preventDefault();
  console.log(total, "toral");
  const entidade_id = document.getElementById("entidade-select").value;
  const entidade = entidades.find((entidade) => entidade.id == entidade_id);
  const body = {
    valor: total,
    tipoVenda: { nome: "teste" },
    entidade,
    vendaMovimento: carrinhoProdutos,
  };
  PostMethod(body, "http://localhost:8080/api/vendas");
}
