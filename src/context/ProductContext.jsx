import { createContext, useEffect, useState ,useContext} from "react";
const ProductContext = createContext();
import api from "../services/config";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}

const useProducts = () => {
  return useContext(ProductContext);
}

export { useProducts };
export default ProductProvider;

