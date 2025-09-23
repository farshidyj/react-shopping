import Skeleton from "react-loading-skeleton";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
import cat from "../img/cat.png";
import {
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    products.length > 0 && setLoading(false);
   }, [products]);

  useEffect(() => {
    setDisplayed(products);
  
    setQuery(getInitialQuery(searchParams));
    
  }, [products]);
  
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search)
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  const categoryHandler = (event) => {
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <CiSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <SkeletonCard />}

          <div className={styles.notFoundParent}>
            {!loading && displayed.length === 0 && (
              <div className={styles.notFound}>
                <img src={cat} alt="cat" />
                <p> ... پشمااام ! پیدا نشد </p>
              </div>
            )}
          </div>

          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>

        <div className={styles.sidebar}>
          <div className="category">
            <FaListUl />
            <span>Category</span>
          </div>

          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
