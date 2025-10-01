import { TbListDetails } from "react-icons/tb";
import { Link, Route } from "react-router-dom";
import { TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { SiPanasonic } from "react-icons/si";

function Card({ data }) {
  const { id, price, image, title } = data;
  const [state, dispatch] = useCart();
  const quantity = productQuantity(state, id);
  // console.log(state);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  // console.log(quantity);
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link className={styles.Link} to={`/products/${id}`}>
          <TbListDetails />
        </Link>

        {quantity === 0 && (
          <button onClick={() => clickHandler("ADD_ITEM")}>
            <TbShoppingBagCheck />
          </button>
        )}

        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline />
          </button>
        )}

        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE")}>-</button>
        )}

        {quantity > 0 && <span>{quantity}</span>}

        {quantity >= 1 && (
          <button onClick={() => clickHandler("INCREASE")}>+</button>
        )}
      </div>
    </div>
  );
}

export default Card;
