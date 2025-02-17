import { getMethod, postMethod } from "../infra/useFetch";
import { auth_url } from "../infra/variables";
export const getEntidade = async () => await getMethod();

export async function saveAuth(e) {
  e.preventDefault();
  const getElId = (id) => document.getElementById(id);
  const login = getElId("login").value.trim();
  const password = getElId("password").value.trim();

  try {
    const auth = {
      login,
      password,
    };

    if (!login || !password) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const result = await postMethod(auth, auth_url + `/register`);

    console.log("Entidade saved successfully:", result);
    alert("Entidade saved successfully!");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to save entidade. Please try again.");
  }
}

export async function postAuth(e) {
  e.preventDefault();
  const getElId = (id) => document.getElementById(id);
  const login = getElId("login").value.trim();
  const password = getElId("password").value.trim();

  try {
    const auth = {
      login,
      password,
    };

    if (!login || !password) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const result = await postMethod(auth, auth_url + `/login`);

    console.log("Entidade saved successfully:", result);
    alert("Entidade saved successfully!");
    return result;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to save entidade. Please try again.");
  }
}
