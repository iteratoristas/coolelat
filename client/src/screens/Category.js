import React, { useState, useEffect } from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../DataProvider";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const data = useData().categories;

  useEffect(() => {
    if (data.length > 0) {
      setCategories(data);
    } else {
      fetch("http://localhost:5000/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((reason) => console.log(reason));
    }
  }, [data]);

  return (
    <>
      <div className="cat-title">
        <h1>Categories:</h1>
      </div>
      {categories.map((element, index) => {
        return (
          <CategoryButton
            key={index}
            text={element.name}
            link={element.name.toLowerCase().replaceAll(" ", "-")}
            type="button"
          />
        );
      })}
    </>
  );
}
