import { CiSearch } from "react-icons/ci";
import {createQueryObject} from "../helper/helper"



function SearchBox({search,setSearch,setQuery}) {

      const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
  };

  
  return (
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
  );
}

export default SearchBox;
