const saveEntidade = async (entidade) => {
  const response = await fetch("http://localhost:8080/api/entidade", {
    method: "POST",
    body: JSON.stringify(entidade),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export default saveEntidade;
