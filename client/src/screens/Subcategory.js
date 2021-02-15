import React from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../context/DataProvider";

export default function Subcategory() {
  const data = useData();
  const subcategories = data.categories

  return (
    <>
      <div className="cat-title">
        <h1>Category name</h1>
        <p>Short description abt the category</p>
      </div>
      <div className="category-names">  
      {!data.loading &&
        !data.error &&
        data.subcategories &&
        data.subcategories.map((el, i) => (
          <CategoryButton
            key={i}
            text={el.subcategory}
            link={el.subcategory.toLowerCase()}
          />
        ))}
      </div>
      {data.loading && <div>Loading...</div>}
      {data.error && <div>Error {data.error}</div>}
      
    </>
  );
}