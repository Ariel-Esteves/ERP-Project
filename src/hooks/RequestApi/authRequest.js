import useFetch from "../../infra/useFetch";
import { auth_url } from "../../infra/variables";

async function getAuth() {
  return await useFetch.getMethod(auth_url);
}

async function postAuth(auth) {
  return await useFetch.postMethod(auth, auth_url);
}

async function findAuth(id) {
  return await useFetch.findMethod(auth_url, id);
}

async function deleteAuth(id) {
  return await useFetch.deleteMethod(auth_url, id);
}

export default { getAuth, postAuth, findAuth, deleteAuth };
