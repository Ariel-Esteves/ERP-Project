export default function pesquisaCadastro(e, listaParaPesquisa, setPesquisados) {
  const pesquisaResultado = listaParaPesquisa.filter((produto) =>
    produto.nome.toLowerCase().includes(e.target.value.toLowerCase())
  );
  setPesquisados(() => [...pesquisaResultado]);
}
