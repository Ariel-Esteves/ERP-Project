import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { findWalletByPersonId } from "../hooks/RequestApi/walletRequest";

const WalletComponent = ({ wallet_id }) => {
  const [balance, setBalance] = useState(0);
  const [entry, setEntry] = useState(0);
  const [exit, setExit] = useState(0);

  const movementOperation = (request, mov) =>
    request.movement.reduce((acc, movimento) => {
      return movimento.in == mov ? (acc += movimento.valor) : acc;
    }, 0);

  const getPayments = async () => {
    const response = await findWalletByPersonId(wallet_id);
    console.log("payments", response);
    setEntry(movementOperation(response, "in"));
    setExit(movementOperation(response, "out"));

    setBalance(entry - exit);
  };

  useEffect(() => {
    getPayments();
  });

  if (wallet_id === undefined) return null;

  return (
    <div className=" radius p-2 bg-secondary">
      <div className="col-4">
        <h3 className="fs-3">Carteira</h3>
      </div>
      <div id="container-4-col" className="mt-2 gap-1 flex-col">
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <p className="fs-1">Saldo:</p>
          </div>
          <span className="fs-2" id="carteira-saldo">
            {balance}
          </span>
        </div>
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <span className="fs-1">Entradas:</span>
          </div>
          <p className="fs-2" id="carteira-entradas">
            {entry}
          </p>
        </div>
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <span className="fs-1">Saídas:</span>
          </div>
          <p id="carteira-saidas" className="fs-2">
            {exit}
          </p>
        </div>
      </div>
    </div>
  );
};

WalletComponent.propTypes = {
  wallet_id: PropTypes.number.isRequired,
};

export default WalletComponent;
