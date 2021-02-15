import React from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../context/DataProvider";

export default function Category() {
  const data = useData();
  const categories = data.categories

  return (
    <>
      <div className="cat-title">
        <h1>Categories:</h1>
      </div>
      <div className="category-names">
      {!data.loading &&
        !data.error &&
        data.categories &&
        data.categories.map((element, index) => {
          return (
            <CategoryButton
              key={index}
              text={element.name}
              link={element.name.toLowerCase().replaceAll(" ", "-")}
              type="button"
            />
          );
        })}
      </div>
      {data.loading && <div>Loading...</div>}
      {data.error && <div>Error {data.error}</div>}
     
    </>
  );
}
