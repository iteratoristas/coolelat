import React, { useState, useEffect } from "react";
import CategoryButton from "../components/CategoryButton";
import { useData } from "../DataProvider";

export default function Subategory(props) {
  const [subcategories, setSubcategories] = useState([]);
  const data = useData().categories;

  const path = props.location.pathname.split("/");
  const location = path[path.length - 1];

  useEffect(() => {
    if (data.length > 0) {
      setSubcategories(
        data.filter(
          (value) => value.name.toLowerCase() === location.replaceAll("-", " ")
        )
      );
    } else {
      fetch(`http://localhost:5000/categories/${location}`)
        .then((response) => response.json())
        .then((data) => setSubcategories(data))
        .catch((reason) => console.log(reason));
    }
  }, [data, location]);

  return (
    <>
      <div className="cat-title">
        <h1>Subcategories:</h1>
      </div>

      {
        subcategories[0]?.subcategories?.map((el, i) => (
            <CategoryButton text={el.subcategory} link={el.subcategory}/>
        ))
      }
    </>
  );
}
