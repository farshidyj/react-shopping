
//kootah konande name e products
const shortenText = (text) => {
  if (text.length > 15) {
    return text.substring(0, 15) + "...";
  }
  return text;
};


//search products
const searchProducts = (products, search) => {
  if (!search) return products;

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

//filter products by category
const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};


// hazf e query haye empty search="" va category="all"
const createQueryObject = (currnetQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currnetQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currnetQuery;
    return rest;
  }

  return {
    ...currnetQuery,
    ...newQuery,
  };
};


//
const getInitialQuery =(searchParams)=>{


     const query= {};
     const category= searchParams.get("category");
     const search=searchParams.get("search");
     if (category) { query.category = category }
     if (search) { query.search = search }
     return query;

}






export { shortenText, searchProducts, filterProducts,createQueryObject,getInitialQuery };
