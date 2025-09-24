import { CiSearch } from "react-icons/ci";
import {createQueryObject} from "../helper/helper"
import styles from "./SearchBox.module.css"



function SearchBox({search,setSearch,setQuery}) {

      const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  const keyDownHandler = (event)=>{
    if (event.key==="Enter") searchHandler();


  }
  
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        onKeyDown={keyDownHandler}
      />
      <button onClick={searchHandler}>
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
