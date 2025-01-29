export const requisitions = async ([setProdutos, setEntidades,setVendas]) => {
  const [produtosResponse, entidadesResponse, vendasResponse] =
    await Promise.all([
      fetch("http://localhost:8080/api/produto"),
      fetch("http://localhost:8080/api/entidade"),
      fetch("http://localhost:8080/api/vendas"),
    ]);
  const produtos = await produtosResponse.json();
  const entidades = await entidadesResponse.json();
  const vendas = await vendasResponse.json();
  setProdutos(() => [...produtos]);
  setEntidades(() => [...entidades]);
  setVendas(() => [...vendas]);
};
