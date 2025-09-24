import SearchBox from "../components/SearchBox";
import Skeleton from "react-loading-skeleton";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";

import { useProducts } from "../context/ProductContext";
import { useEffect, useState } from "react";
import {
  searchProducts,
  filterProducts,
  getInitialQuery,
} from "../helper/helper";
import { useSearchParams, Navigate } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import Sidebar from "../components/Sidebar";

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
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  // const searchHandler = () => {
  //   setQuery((query) => createQueryObject(query, { search: search }));
  // };

  if (!loading && displayed.length === 0) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <SkeletonCard />}

          {/* <div className={styles.notFoundParent}>
            { !loading && displayed.length === 0 && (
              <div className={styles.notFound}>
                <img src={cat} alt="cat" />
                <p> ... پشمااام ! پیدا نشد </p>
              </div>
            )}
          </div> */}

          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>

        <Sidebar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
