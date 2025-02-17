import useFetch from "../../infra/useFetch";
import { user_url } from "../../infra/variables";

async function getUser() {
  return await useFetch.getMethod(user_url);
}

async function postUser(user) {
  return await useFetch.postMethod(user, user_url);
}

async function findUser(id) {
  return await useFetch.findMethod(user_url, id);
}

async function deleteUser(id) {
  return await useFetch.deleteMethod(user_url, id);
}

export { getUser, postUser, findUser, deleteUser };
