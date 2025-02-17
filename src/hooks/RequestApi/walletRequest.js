import {
  deleteMethod,
  findMethod,
  getMethod,
  postMethod,
} from "../../infra/useFetch";
import { wallet_url } from "../../infra/variables";

async function getwallet() {
  return await getMethod(wallet_url);
}

async function postwallet(wallet) {
  return await postMethod(wallet, wallet_url);
}

async function findwallet(id) {
  return await findMethod(wallet_url, id);
}

async function deletewallet(id) {
  return await deleteMethod(wallet_url, id);
}
async function findWalletByPersonId(id) {
  return await findMethod(wallet_url + "/person", id);
}
export {
  getwallet,
  postwallet,
  findwallet,
  deletewallet,
  findWalletByPersonId,
};
