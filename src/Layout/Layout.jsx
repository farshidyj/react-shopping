import { Children } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Layout.module.css";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link className={styles.shopName} to="/products">
            
            React Shop{" "}
          </Link>
          <Link to="/checkout" className={styles.cartIcon}>
            <TiShoppingCart />
            {!!state.itemsCounter && <span >{state.itemsCounter}</span>}
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <h4>Developed by fyj</h4>
        </div>
      </footer>
    </>
  );
}

export default Layout;
