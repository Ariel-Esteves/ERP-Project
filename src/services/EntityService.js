import { getMethod, postMethod } from "../infra/useFetch";
import { person_url } from "../infra/variables";

export const getEntidade = async () => await getMethod(person_url);

export async function saveEntidade(e) {
  e.preventDefault();

  const getElId = (id) => document.getElementById(id);
  const name = getElId("name").value.trim();
  const cpf = getElId("cpf").value.trim();
  const email = getElId("email").value.trim();
  const personType = getElId("personType").value.trim();
  const uf = getElId("uf").value.trim();
  const street = getElId("street").value.trim();
  const city = getElId("city").value.trim();
  const cep = getElId("cep").value.trim();
  const country = getElId("country").value.trim();
  const user = localStorage.getItem("user");

  try {
    const entidade = {
      name,
      cpf,
      email,
      personType,
      address: { uf, street, city, cep, country },
      user,
    };
    console.log(entidade);
    if (
      !name ||
      !cpf ||
      !email ||
      !personType ||
      !uf ||
      !street ||
      !city ||
      !cep ||
      !country
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const result = await postMethod(entidade, person_url);

    console.log("Entidade saved successfully:", result);
    alert("Entidade saved successfully!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to save entidade. Please try again.");
  }
}
