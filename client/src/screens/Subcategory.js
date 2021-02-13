import React from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../DataProvider";

export default function Subcategory() {
  const data = useData();

  return (
    <>
      <div className="cat-title">
        <h1>Subcategories:</h1>
      </div>
      {data.loading && <div>Loading...</div>}
      {data.error && <div>Error {data.error}</div>}
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
    </>
  );
}
