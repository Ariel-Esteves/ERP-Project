import { useEffect, useState } from "react";

const CarteiraComponent = () => {
  const [carteira, setCarteira] = useState({});

  const getCarteira = async () => {
    const [carteira] = await Promise.all([
      (await fetch("http://localhost:8080/api/carteira/1")).json(),
    ]);
    setCarteira(() => carteira);

    const entradas = carteira.carteiraMovimentoEntity.reduce(
      (acc, movimento) => {
        console.log(movimento.tipo);
        return movimento.tipo == "ENTRADA" ? (acc += movimento.valor) : acc;
      },
      0
    );

    const saidas = carteira.carteiraMovimentoEntity.reduce((acc, movimento) => {
      return movimento.tipo == "SAIDA" ? (acc += movimento.valor) : acc;
    }, 0);

    document.getElementById("carteira-entradas").innerText = entradas;
    document.getElementById("carteira-saidas").innerText = saidas;
  };

  useEffect(() => {
    getCarteira();
  }, []);

  return (
    <div className="w-1 radius p-2 bg-secondary">
      <div className="col-4">
        <h3 className="fs-3">Carteira</h3>
      </div>
      <div id="container-4-col" className="mt-2 gap-1 flex-col">
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <p className="fs-1">Saldo:</p>
          </div>
          <span className="fs-2" id="carteira-saldo">
            {carteira.valor}
          </span>
        </div>
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <span className="fs-1">Entradas:</span>
          </div>
          <p className="fs-2" id="carteira-entradas">
            100
          </p>
        </div>
        <div className="col-4 relative inline-block">
          <div className="left-top">
            <span className="fs-1">Saídas:</span>
          </div>
          <p id="carteira-saidas" className="fs-2">
            0
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarteiraComponent;
