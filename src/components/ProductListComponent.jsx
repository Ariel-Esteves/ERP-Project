import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import PropTypes from "prop-types";

const ProductListComponent = ({ productRef }) => {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getproductList = async () => {
    try {
      const productList = await getProducts();

      if (productList != undefined) setproductList(productList);
      console.log("productList: ", productList);
    } catch (error) {
      console.error("Failed to fetch Product list:", error);
      setError("Failed to fetch Product list.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getproductList();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <label htmlFor="product"> Produto</label>
      <select id="product" ref={productRef}>
        {productList.map((produto) => (
          <option key={produto.id} value={produto.id}>
            {produto.name}
          </option>
        ))}
      </select>
    </>
  );
};
ProductListComponent.propTypes = {
  productRef: PropTypes.object.isRequired,
};

export default ProductListComponent;
