import React, { useState, useEffect } from "react";
import CategoryButton from "../components/CategoryButton";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((reason) => console.log(reason));
  }, []);

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
