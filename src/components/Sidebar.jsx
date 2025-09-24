import {createQueryObject} from "../helper/helper"
import styles from "./Sidebar.module.css"
import { FaListUl } from "react-icons/fa6";

function Sidebar({setQuery}) {


      const categoryHandler = (event) => {
        if (event.target.tagName==="UL") return;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };


  return (
            <div className={styles.sidebar}>
          <div className={styles.category}>
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
  )
}

export default Sidebar