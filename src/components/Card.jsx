import { TbListDetails } from "react-icons/tb";
import { Link, Route } from "react-router-dom";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import styles from "./Card.module.css";

function Card({data}) {
    const {id, price, image,title} = data;
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>${price}</p>
        <div className={styles.actions}>
            <Link className={styles.Link} to={`/products/${id}`}> <TbListDetails/> </Link>
            <button ><TbShoppingBagCheck/></button>

                 </div>
        


    </div>
  )
}

export default Card