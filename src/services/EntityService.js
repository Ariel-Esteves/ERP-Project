import { PostMethod } from "../hooks/useFetch";

export const getEntidade = async () =>
  (await fetch("http://localhost:8080/api/entidade")).json();

export async function saveEntidade(e) {
  e.preventDefault();
  const getElId = (id) => document.getElementById(id);
  const nome = getElId("nome").value.trim();
  const cpf = getElId("cpf").value.trim();
  const email = getElId("email").value.trim();
  const tipo = getElId("tipo").value.trim();
  const uf = getElId("uf").value.trim();
  const rua = getElId("rua").value.trim();
  const cidade = getElId("cidade").value.trim();
  const cep = getElId("cep").value.trim();
  const pais = getElId("pais").value.trim();

  try {
    const entidade = {
      nome,
      cpf,
      email,
      tipo,
      endereco: { uf, rua, cidade, cep, pais },
    };

    if (
      !nome ||
      !cpf ||
      !email ||
      !tipo ||
      !uf ||
      !rua ||
      !cidade ||
      !cep ||
      !pais
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const result = await PostMethod(
      entidade,
      "http://localhost:8080/api/entidade"
    );

    console.log("Entidade saved successfully:", result);
    alert("Entidade saved successfully!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to save entidade. Please try again.");
  }
}
