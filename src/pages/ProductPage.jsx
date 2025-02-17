import ProductForm from "../components/ProductForm";
import { getProduct, saveProduct } from "../services/ProductService";
import SearchEntityComponent from "../components/SearchEntityComponent";

const ProductPage = () => {
  return (
    <>
      <section id="container-4-col">
        <div className="container-img col-2 mr-0 row-1 m-4 mb-0">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/People-meeting-and-discussing-growth-statistics-on-tablet-/960x0.jpg?format=jpg&width=1440"
            alt="img here"
            className="radius"
          />
        </div>
        <div className="card2 bg-secondary ml-4 p-4 radius col-2 row-2">
          <div>
            <h3 className="fs-3">Estoque</h3>
          </div>
          <div className="flex-col h-auto">
            <div>
              <div>
                <p className="fs-1">Produtos:</p>
                <span id="estoque-quantidade">100</span>
              </div>
              <div>
                <p className="fs-1">
                  Entradas: <span id="estoque-entradas">100</span>
                </p>
                <p className="fs-1">
                  Saídas: <span id="estoque-saidas">0</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card2 bg-secondary ml-4 p-4 radius col-2 row-3">
          <div>
            <h3 className="fs-3">Movimentações Financeiras</h3>
          </div>
          <div>
            <p className="fs-1">
              Total: <span>100</span>
            </p>
            <div>
              <p className="fs-1">
                Entradas: <span>100</span>
              </p>
              <p className="fs-1">
                Saídas: <span>0</span>
              </p>
            </div>
          </div>
        </div>
        <ProductForm saveProduct={saveProduct} />
      </section>
      <SearchEntityComponent requestMethod={getProduct} />
    </>
  );
};

export default ProductPage;
