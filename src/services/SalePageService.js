import { getMethod } from "../infra/useFetch";
import { person_url, product_url, sale_url } from "../infra/variables";

export const requisitions = async ([setProdutos, setEntidades, setVendas]) => {
  const [produtosResponse, entidadesResponse, vendasResponse] =
    await Promise.all([
      getMethod(product_url),
      getMethod(person_url),
      getMethod(sale_url),
    ]);
  const produtos = await produtosResponse;
  const entidades = await entidadesResponse;
  const vendas = await vendasResponse;
  setProdutos(() => [...produtos]);
  if (entidades.length > 0) setEntidades(() => [...entidades]);
  setVendas(() => [...vendas]);
};
