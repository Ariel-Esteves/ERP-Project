import { postMethod } from "../infra/useFetch";
import { auth_url } from "../infra/variables";

const alertFields = alert("Please fill in all fields.");

export async function PostAuth(auth, saveToken, removeToken) {
  removeToken();

  if (!auth.login || !auth.password) alertFields;

  const { token } = await postMethod(auth, auth_url + `/login`);
  console.log("token", token);

  if (token) saveToken(token, auth.login);

  return token;
}

export async function SaveAuth(auth, saveToken, removeToken) {
  removeToken();
  if (!auth.login || !auth.password) {
    alertFields;
    return;
  }

  try {
    const response = await postMethod(auth, auth_url + `/register`);
    if (response) await PostAuth(auth, saveToken, removeToken);
    return true;
  } catch (error) {
    console.error("Error status:", error.status);
    return false;
  }
}
