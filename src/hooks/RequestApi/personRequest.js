import {
  deleteMethod,
  findMethod,
  getMethod,
  postMethod,
} from "../../infra/useFetch";

import { person_url } from "../../infra/variables";

async function getPerson(setData = null) {
  const response = await getMethod(person_url);
  if (setData) {
    setData(response);
    return;
  }
  return response;
}

async function postPerson(Person) {
  return await postMethod(Person, person_url);
}

async function findPerson(id) {
  return await findMethod(person_url, id);
}

async function deletePerson(id) {
  return await deleteMethod(person_url, id);
}

export { getPerson, postPerson, findPerson, deletePerson };
