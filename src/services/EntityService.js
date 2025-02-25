import { getMethod, postMethod } from "../infra/useFetch";
import { person_url } from "../infra/variables";

export const getEntidade = async () => await getMethod(person_url);

export async function saveEntidade(data) {
  try {
    const result = await postMethod(data, person_url);

    console.log("Entidade saved successfully:", result);
    alert("Entidade saved successfully!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to save entidade. Please try again.");
  }
}
