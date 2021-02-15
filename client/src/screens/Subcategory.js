import React from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../context/DataProvider";

export default function Subcategory() {
  const data = useData();

  const path = window.location.pathname.split('/');
  const location = path[path.length - 1].split('-').map(value => value[0].toUpperCase() + value.substring(1)).join(' ');
  const category = data.categories.filter(value => value.name === location)[0];
  const subcategories = category?.subcategories;

  return (
    <>
      <div className="cat-title">
        <h1>{location}</h1>
        <p>{category?.description || "Short description abt the category"}</p>
      </div>
      <div className="category-names">  
      {!data.loading &&
        !data.error &&
        subcategories &&
        subcategories.map((el, i) => (
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
