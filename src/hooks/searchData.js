export default function searchData(e, listToSearch, setSearched) {
  const pesquisaResultado = listToSearch.filter((product) =>
    product.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  setSearched(() => [...pesquisaResultado]);
}
